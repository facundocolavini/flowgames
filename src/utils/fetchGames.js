const {data} = require('./games');



const fetchGames = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data) {
                resolve(data);
            } else {
                reject('Error');
            }
        }, 2000);
    });
}


export default fetchGames;