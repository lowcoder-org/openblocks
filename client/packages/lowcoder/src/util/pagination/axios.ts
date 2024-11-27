import { FolderApi } from "@lowcoder-ee/api/folderApi";
import ApplicationApi from "@lowcoder-ee/api/applicationApi";
import {
    fetchAppRequestType,
    fetchDBRequestType,
    fetchFolderRequestType,
    orgGroupRequestType
} from "@lowcoder-ee/util/pagination/type";
import OrgApi from "@lowcoder-ee/api/orgApi";
import { DatasourceApi } from "@lowcoder-ee/api/datasourceApi";

export const fetchFolderElements = async (request: fetchFolderRequestType) => {
    try {
        const response = await FolderApi.fetchFolderElementsPagination(request);
        return {
            success: true,
            data: response.data.data,
            total:response.data.total
        };
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return {
            success: false,
            error: error
        };
    }
}

export const fetchApplicationElements = async (request: fetchAppRequestType)=> {
    try {
        const response = await ApplicationApi.fetchAllApplicationsPagination(request);
        return {
            success: true,
            data: response.data.data,
            total: response.data.total
        }
    } catch (error: any) {
        console.error('Failed to fetch data:', error);
        return {
            success: false,
            error: error
        };
    }
}

export const fetchOrgGroups = async (request: orgGroupRequestType) => {
    try{
        const response = await OrgApi.fetchGroupPagination(request);
        return {
            success: true,
            data:response.data.data,
            total:response.data.total
        }
    }
    catch (error: any) {
        console.error('Failed to fetch data:', error);
        return {
            success: false,
            error: error
        };
    }
}

export const fetchDatasourcePagination = async (request: fetchDBRequestType)=> {
    try {
        const response = await DatasourceApi.fetchDatasourcePaginationByOrg(request);
        return {
            success: true,
            data: response.data.data,
            total: response.data.total
        }
    } catch (error: any) {
        console.error('Failed to fetch data:', error);
        return {
            success: false,
            error: error
        };
    }
}