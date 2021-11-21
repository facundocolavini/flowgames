import { baseurl,CONFIG } from "./baseUrl";

const {KEY,PAGE,PAGE_SIZE} = CONFIG;
const ENPOINT_GAMES = baseurl('games');




export const fetchGames = (time) => {
    return new Promise((resolve, reject) => {
        fetch(`${ENPOINT_GAMES}?${KEY}`)
            .then(response => {
                setTimeout(() => {
                    resolve(response);
                },time)
            }) 
            .catch(err =>{
                console.log(err);
                reject('Data not found')
            });
    });
}

export const detailsGame = (time,idGame) => {
    return new Promise((resolve, reject) => {
        fetch(`${ENPOINT_GAMES}/${idGame}?${KEY}`)
            .then(response => {
                setTimeout(() => {
                    resolve(response);
                },time)
            }) 
            .catch(err =>{
                console.log(err);
                reject('Data not found')
            });
    });
}

export const nextPage = (time,page ,page_size) => {
    return new Promise((resolve, reject) => {
        fetch(`${ENPOINT_GAMES}?${KEY}&${PAGE}=${page}&${PAGE_SIZE}=${page_size}`)
            .then(response => {
                setTimeout(() => {
                    resolve(response);
                },time)
            }) 
            .catch(err =>{
                console.log(err);
                reject('Data not found')
            });
    });
}

export const getNextPage = async(time,page,page_size) => {
    try{
        const response = await nextPage(time,page,page_size);
        const data = await response.json();
        for (const game of data.results){
            game.price = Math.round(Math.floor(Math.random() * 60));
            game.stock = 100;
        }
        return data;
    }
    catch(err){
        console.log(err)
    }
}
export const getGameDetails = async(time,idGame) => {
    try{
        const response = await detailsGame(time,idGame);
        const data = await response.json();
        data.price = Math.round(Math.floor(Math.random() * 60));
        data.stock = 10;
        return data;
    }
    catch(err){
        console.log(err)
    }
}
export const getGames = async(time) => {
    try{
        const response = await fetchGames(time);
        const data = await response.json();
        for (const game of data.results){
            game.price = Math.round(Math.floor(Math.random() * 60) + 1);
            game.stock = 100;
        }
        return data.results;
    }
    catch(err){
        console.log(err)
    }
}

export default getGames;