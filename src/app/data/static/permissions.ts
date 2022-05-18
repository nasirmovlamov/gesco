import { objectCRUDGenerator } from "app/helpers/utils/objectUtils/objectGeneratorCRUD";

export const CREATE = 'create';
export const READ = 'read';
export const UPDATE = 'update';
export const DELETE = 'delete';
export const LIST = 'list';
export const SHOW = 'show';
export const INDEX = 'index';
export const EDIT = 'edit';


export const permissions = {
    USERS_PERMISSIONS: {
        ...objectCRUDGenerator('user', [CREATE, READ, UPDATE, DELETE, LIST, SHOW, INDEX, EDIT])
    },
    ROLES_PERMISSIONS: {
        ...objectCRUDGenerator('role', [CREATE, READ, UPDATE, DELETE, LIST, SHOW, INDEX, EDIT])
    },
}

export const USERS_PERMISSIONS = {
    USER_CREATE: `user.${CREATE}`,
    USER_READ: `user.${READ}`,
    USER_UPDATE: `user.${UPDATE}`,
    USER_DELETE:   `user.${DELETE}`,
    USER_SHOW: `user.${SHOW}`,
    USER_EDIT: `user.${EDIT}`,
    USER_INDEX: `user.${INDEX}`,
};

export const ROLE_PERMISSIONS = {
    ROLE_CREATE:    `role.${CREATE}`,
    ROLE_READ:      `role.${READ}`,
    ROLE_UPDATE:    `role.${UPDATE}`,
    ROLE_DELETE:    `role.${DELETE}`,
    ROLE_LIST:      `role.${LIST}`,
    ROLE_SHOW:      `role.${SHOW}`,
    ROLE_EDIT:      `role.${EDIT}`,
    ROLE_INDEX:     `role.${INDEX}`,
};




