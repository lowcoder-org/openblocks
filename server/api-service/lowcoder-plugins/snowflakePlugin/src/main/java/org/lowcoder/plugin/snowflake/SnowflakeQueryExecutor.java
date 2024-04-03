package org.lowcoder.plugin.snowflake;

import jakarta.annotation.Nonnull;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.lowcoder.plugin.sql.GeneralSqlExecutor;
import org.lowcoder.plugin.sql.SqlBasedQueryExecutor;
import org.lowcoder.sdk.models.DatasourceStructure;
import org.lowcoder.sdk.models.DatasourceStructure.Column;
import org.lowcoder.sdk.models.DatasourceStructure.Table;
import org.lowcoder.sdk.models.DatasourceStructure.TableType;
import org.lowcoder.sdk.plugin.common.sql.SqlBasedDatasourceConnectionConfig;
import org.lowcoder.sdk.plugin.common.sql.SqlBasedQueryExecutionContext;
import org.lowcoder.sdk.plugin.sqlcommand.GuiSqlCommand;
import org.lowcoder.sdk.query.QueryVisitorContext;
import org.lowcoder.sdk.util.ExceptionUtils;
import org.pf4j.Extension;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

import static org.lowcoder.sdk.exception.PluginCommonError.DATASOURCE_GET_STRUCTURE_ERROR;

@SuppressWarnings({"SqlDialectInspection", "SqlNoDataSourceInspection"})
@Slf4j
@Extension
public class SnowflakeQueryExecutor extends SqlBasedQueryExecutor {

    public SnowflakeQueryExecutor() {
        super(new GeneralSqlExecutor(false));
    }

    @SuppressWarnings("SqlDialectInspection")
    public static final String COLUMNS_QUERY = """
            SELECT
               table_schema as "table_schema",
               concat(table_schema, '.', table_name) as "table_name",
               column_name as "column_name",
               data_type as "column_type"
               FROM INFORMATION_SCHEMA.COLUMNS
               where table_schema = '#SCHEMA'
               ORDER BY table_name, ordinal_position""";

    @SuppressWarnings("SqlDialectInspection")
    private static final String COLUMNS_QUERY_WITHOUT_SCHEMA = """
            SELECT
             table_schema as "table_schema",
               concat(table_schema, '.', table_name) as "table_name",
               column_name as "column_name",
               data_type as "column_type"
               FROM INFORMATION_SCHEMA.COLUMNS
               ORDER BY table_name, ordinal_position
             """;

    /**
     * Snowflake does not support preparedStatement
     */
    @Override
    public SqlBasedQueryExecutionContext buildQueryExecutionContext(SqlBasedDatasourceConnectionConfig datasourceConfig,
            Map<String, Object> queryConfig, Map<String, Object> requestParams, QueryVisitorContext queryVisitorContext) {
        return super.buildQueryExecutionContext(datasourceConfig, queryConfig, requestParams, queryVisitorContext)
                .toBuilder()
                .disablePreparedStatement(true)
                .build();
    }

    @Nonnull
    @Override
    protected DatasourceStructure getDatabaseMetadata(Connection connection, SqlBasedDatasourceConnectionConfig connectionConfig) {
        Map<String, Table> tablesByName = new LinkedHashMap<>();

        try (Statement statement = connection.createStatement();
                ResultSet resultSet = statement.executeQuery(getTableSchemaQuery(connectionConfig))) {
            while (resultSet.next()) {
                String tableName = resultSet.getString("table_name");
                String schema = resultSet.getString("table_schema");
                Table table = tablesByName.computeIfAbsent(tableName, __ -> new Table(
                        TableType.TABLE, schema, tableName,
                        new ArrayList<>(),
                        new ArrayList<>(),
                        new ArrayList<>()
                ));

                table.addColumn(new Column(
                        resultSet.getString("column_name"),
                        resultSet.getString("column_type"),
                        null,
                        false
                ));
            }
        } catch (SQLException throwable) {
            throw ExceptionUtils.wrapException(DATASOURCE_GET_STRUCTURE_ERROR, "DATASOURCE_GET_STRUCTURE_ERROR", throwable);
        }
        return new DatasourceStructure(new ArrayList<>(tablesByName.values()));
    }

    private static String getTableSchemaQuery(SqlBasedDatasourceConnectionConfig connectionConfig) {
        Object schema = connectionConfig.getExtParams().get("schema");

        if (schema != null && StringUtils.isNotBlank(String.valueOf(schema))) {
            return COLUMNS_QUERY.replace("#SCHEMA", String.valueOf(schema));
        }
        return COLUMNS_QUERY_WITHOUT_SCHEMA;
    }

    @Override
    protected GuiSqlCommand parseSqlCommand(String guiStatementType, Map<String, Object> detail) {
        throw new UnsupportedOperationException();
    }

}
