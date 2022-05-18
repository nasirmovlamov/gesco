import { objectCRUDGenerator } from "app/helpers/utils/objectUtils/objectGeneratorCRUD";

export const APPLICATION_PATH = {
    BASE: 'http://10.15.20.25',
    LOGIN: '/login',
    UNAUTHORIZED: '/401',
    FORBIDDEN: '/403',
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    METHOD_NOT_ALLOWED: '/405',
    LOGOUT: '/logout',
}

export const APPLICATION_API_PATH = {
    BASE:"http://10.15.20.25:8290/api",
    AUTH:{
        LOGIN: '/auth/login',
        REFRESH_TOKEN: '/auth/refresh',
        LOGOUT: '/auth/logout',   
        ME: '/auth/me',
    },
    VACANCY_SETTINGS:{
        VIEW_VACANCY_SETTINGS: '/settings/',
        UPDATE_VACANCY_SETTINGS: '/settings/1',
    },
    NORMATIVE:{
        LIST_NORMATIVE: '/normatives',
        SHOW_NORMATIVE: '/normatives/',
        CREATE_NORMATIVE: '/normatives',
        UPDATE_NORMATIVE: '/normatives/',
        DELETE_NORMATIVE: '/normatives/',
    },
    ROLE:{
        LIST_ROLE: '/role',
        SHOW_ROLE: '/role/',
        CREATE_ROLE: '/role',
        UPDATE_ROLE: '/role/',
        DELETE_ROLE: '/role/',
    },
    PERMISSION:{
        LIST_PERMISSION: '/permission',
        SHOW_PERMISSION: '/permission/',
        CREATE_PERMISSION: '/permission',
        UPDATE_PERMISSION: '/permission/',
        DELETE_PERMISSION: '/permission/',
    },
    BRANCH:{
        LIST_BRANCH: '/branch',
        SHOW_BRANCH: '/branch/',
        CREATE_BRANCH: '/branch',
        UPDATE_BRANCH: '/branch/',
        DELETE_BRANCH: '/branch/',
    },
    APPEALS:{
        CREATE_APPEAL: '/appeals',
    }
}