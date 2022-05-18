

export const objectValuesUtil: any = (obj: any) => {
    return Object.keys(obj).map(key => obj[key]);
};

export const objectKeysUtil:any = (object: any)  => {
    const objectArray = Object.keys(object);
    return objectArray;
}
