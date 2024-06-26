package org.lowcoder.domain.query.model;

import static com.google.common.base.Suppliers.memoize;

import java.util.Map;
import java.util.function.Supplier;

import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import lombok.extern.jackson.Jacksonized;
import org.lowcoder.sdk.models.HasIdAndAuditing;
import org.lowcoder.sdk.util.JsonUtils;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Getter;

@Document
@Getter
@SuperBuilder
@Jacksonized
@NoArgsConstructor
public class LibraryQuery extends HasIdAndAuditing {

    private String gid;
    private String organizationId;
    private String name;
    private Map<String, Object> libraryQueryDSL;

    @Transient
    private final Supplier<BaseQuery> baseQuerySupplier = memoize(() ->
            JsonUtils.fromJson(JsonUtils.toJson(getLibraryQueryDSL().get("query")), BaseQuery.class));

    @Transient
    public BaseQuery getQuery() {
        return baseQuerySupplier.get();
    }

}
