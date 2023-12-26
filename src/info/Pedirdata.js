import data from "../datos/data.json";

export const Pedirdata = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        })
    })
}

export const Pedirdata = (id) => {
    return new Promise((resolve, reject)) => {
        const item = data.find(())
    }
}