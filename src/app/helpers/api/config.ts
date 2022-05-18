export const AXIOS_CONFIG:any = {
    AUTH:{
        LOGIN: {
            method: 'post',
            url: '/auth/login',
            data: {
                email:"nasirmovlamov@gmail.com",
                password : "nasir1234"
            },
        },
        ME: {
            method: 'post',
            url: '/auth/me',
        },
        REFRESH_TOKEN: {
            method: 'post',
            url: '/auth/refresh',
            data:{
                email: '',
                password: '',
            }
        },
    },
    USER:{
        LIST_USERS: {
            method: 'get',
            url: '/users',
        },
        SHOW_USER: {
            method: 'get',
            url: '/users/:id',
        },
        CREATE_USER: {
            method: 'post',
            url: '/users',
            data: {
                name: "",
                surname: "",
                email: "",
                password : "",
                status: 1,
                role : [1]
            },
        },
        UPDATE_USER: {
            method: 'put',
            url: '/users/:id',
            data: {
                name: "",
                surname: "",
                email: "",
                password : "",
                status: 1,
                role : [1]
            },
        },
        DELETE_USER: {
            method: 'delete',
            url: '/users/:id',
        },
    },
    VACANCY_SETTINGS:{
        VIEW_VACANCY_SETTINGS: {
            method: 'get',
            url: '/settings/',
        },
        UPDATE_VACANCY_SETTINGS: {
            method: 'put',
            url: '/settings/1',
            data: {
                name: '',
                email: '',
                password: '',
            },
        },
    },
    NORMATIVE:{
        LIST_NORMATIVE: {
            method: 'get',
            url: '/normatives',
        },
        SHOW_NORMATIVE: {
            method: 'get',
            url: '/normatives/:id',
        },
        CREATE_NORMATIVE: {
            method: 'post',
            url: '/normatives',
            data: {
                name: '',
                description: '',
                type: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        UPDATE_NORMATIVE: {
            method: 'put',
            url: '/normatives/:id',
            data: {
                name: '',
                description: '',
                type: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        DELETE_NORMATIVE: {
            method: 'delete',
            url: '/normatives/:id',
        },
    },
    ROLE:{
        LIST_ROLE: {
            method: 'get',
            url: '/role',
        },
        SHOW_ROLE: {
            method: 'get',
            url: '/role/:id',
        },
        CREATE_ROLE: {
            method: 'post',
            url: '/role',
            data: {
                name: '',
                description: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        UPDATE_ROLE: {
            method: 'put',
            url: '/role/:id',
            data: {
                name: '',
                description: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        DELETE_ROLE: {
            method: 'delete',
            url: '/role/:id',
        },
    },
    PERMISSION:{
        LIST_PERMISSION: {
            method: 'get',
            url: '/permission',
        },
        SHOW_PERMISSION: {
            method: 'get',
            url: '/permission/:id',
        },
        CREATE_PERMISSION: {
            method: 'post',
            url: '/permission',
            data: {
                name: '',
                description: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        UPDATE_PERMISSION: {
            method: 'put',
            url: '/permission/:id',
            data: {
                name: '',
                description: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        DELETE_PERMISSION: {
            method: 'delete',
            url: '/permission/:id',
        },
    },
    USER_ROLE:{
        LIST_USER_ROLE: {
            method: 'get',
            url: '/user-role',
        },
        SHOW_USER_ROLE: {
            method: 'get',
            url: '/user-role/:id',
        },
        CREATE_USER_ROLE: {
            method: 'post',
            url: '/user-role',
            data: {
                user_id: '',
                role_id: '',
                status: '',
                created_by: '',
                updated_by: '',
            },
        },
        UPDATE_USER_ROLE: {
            method: 'put',
            url: '/user-role/:id',
            data: {
                user_id: '',
                role_id: '',
                status: '',
                created_by: '',
                updated_by: '',
                permissions:[]
            },
        },
        DELETE_USER_ROLE: {
            method: 'delete',
            url: '/user-role/:id',
        },
    },
    
    
    
}