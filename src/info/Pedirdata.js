import data from "../datos/data.json";

export const Pedirdata = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        })
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}