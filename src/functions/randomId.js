/**
 * Random ID
 * @param {number} length number
 * @param {A/9} type A/9
 */
export const randomId = (length = 6, type) => {
    var result = "";
    var characters = type === "A" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : type === 9 ? "0123456789" : type === "A9" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : type === "a9" ? "abcdefghijklmnopqrstuvwxyz0123456789" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};