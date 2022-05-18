export const objectCRUDGenerator = (name: string, permissions: string[]) => {
    const permissionsOfName:any = {}
    permissions.map(permission => (
        permissionsOfName[`${name.toUpperCase()}_${permission.toUpperCase()}`] = `${name}.${permission}`
    ));
    return permissionsOfName
};