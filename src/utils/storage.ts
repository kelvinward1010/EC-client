const storagePrefix = "ecormerce_kw_";

const storage = {
    getToken: () => {
        return JSON.parse(
            window.localStorage.getItem(`${storagePrefix}token`) as string,
        );
    },
    setToken: (token: string) => {
        window.localStorage.setItem(
            `${storagePrefix}token`,
            JSON.stringify(token),
        );
    },
    clearToken: () => {
        window.localStorage.removeItem(`${storagePrefix}token`);
    },
};

export default storage;

export const storageRefreshToken = {
    getToken: () => {
        return JSON.parse(
            window.localStorage.getItem(
                `${storagePrefix}refresh_token`,
            ) as string,
        );
    },
    setToken: (token: string) => {
        window.localStorage.setItem(
            `${storagePrefix}refresh_token`,
            JSON.stringify(token),
        );
    },
    clearToken: () => {
        window.localStorage.removeItem(`${storagePrefix}refresh_token`);
    },
};

export const storageService = {
    getStorage: (key: string) => {
        return JSON.parse(
            window.localStorage.getItem(`${storagePrefix}${key}`) || "{}",
        );
    },
    setStorage: (key: string, value: string) => {
        window.localStorage.setItem(`${storagePrefix}${key}`, value);
    },
    clearStorage: (key: string) => {
        window.localStorage.removeItem(`${storagePrefix}${key}`);
    },
};

export const sessionService = {
    getStorage: (key: string) => {
        return JSON.parse(
            window.sessionStorage.getItem(`${storagePrefix}${key}`) || "{}",
        );
    },
    setStorage: (key: string, value: any) => {
        window.sessionStorage.setItem(
            `${storagePrefix}${key}`,
            JSON.stringify(value),
        );
    },
    clearStorage: (key: string) => {
        window.sessionStorage.removeItem(`${storagePrefix}${key}`);
    },
};
