package org.lowcoder.infra.serverlog;

import static org.lowcoder.infra.perf.PerfEvent.SERVER_LOG_BATCH_INSERT;

import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.TimeUnit;

import org.apache.commons.collections4.CollectionUtils;
import org.lowcoder.infra.event.SystemCommonEvent;
import org.lowcoder.infra.perf.PerfHelper;
import org.lowcoder.plugin.events.ServerLogEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import io.micrometer.core.instrument.Tags;

@Service
public class ServerLogService {

    @Autowired
    private ServerLogRepository serverLogRepository;

    @Autowired
    private PerfHelper perfHelper;

    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;

    private volatile Queue<ServerLog> serverLogs = new ConcurrentLinkedQueue<>();

    public void record(ServerLog serverLog) {
        serverLogs.add(serverLog);
    }

    @Scheduled(initialDelay = 1, fixedRate = 1, timeUnit = TimeUnit.SECONDS)
    private void scheduledInsert() {
        if (CollectionUtils.isEmpty(serverLogs)) {
            return;
        }
        var tmp = serverLogs;
        serverLogs = new ConcurrentLinkedQueue<>();
        serverLogRepository.saveAll(tmp)
                .collectList()
                .subscribe(result -> {
                    int count = result.size();
                    perfHelper.count(SERVER_LOG_BATCH_INSERT, Tags.of("size", String.valueOf(result.size())));
                    publishServerLogEvent(count);
                });
    }

    private void publishServerLogEvent(int count) {
        ServerLogEvent event = new ServerLogEvent();
        event.setApiCallsCount(count);
        applicationEventPublisher.publishEvent(event);
    }
}
