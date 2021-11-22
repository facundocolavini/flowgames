/* CUSTOM FETCH A MI ARCHIVO LOCAL GAMES DONDE TENGO TODA LA DATA */
let OK = true;
const customFetch = (time,task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(OK) {
                resolve(task);
            } else {
                reject('Error to resolve promise');
            }
        }, time);
    });
}

export default customFetch;