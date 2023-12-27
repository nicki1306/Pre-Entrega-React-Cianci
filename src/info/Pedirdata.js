import data from "../datos/data.json";

export const Pedirdata = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        })
    })
}
