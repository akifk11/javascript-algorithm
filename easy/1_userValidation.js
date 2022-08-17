export const userValidation = (str) => {

    if (str.length >= 4 && str.length <= 25 && /[a-zA-Z]/.test(str.slice(0, 1)) &&
        (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1))) {
        return true;
    } else {
        return false;
    }

};

// (/[^\w+$]/) sadece harfler rakamlar ve _ ler demektir


