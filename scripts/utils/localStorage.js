export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
};

export const getFromLocalStorage = key => localStorage.getItem(key);