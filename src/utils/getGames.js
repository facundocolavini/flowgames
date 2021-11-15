import { baseurl } from "./baseUrl";

const GAMES_ENDPOINT = baseurl('games');



export const fetchGames = () => {
    return new Promise((resolve, reject) => {
        fetch(GAMES_ENDPOINT)
            .then(response => {
                setTimeout(() => {
                    resolve(response.json());
                },2000)
            }) 
            .catch(err =>{
                console.log(err);
                reject('Data not found')
            });
    });
}

export  const  getGames  =  async() => {
    try{
        const data = await fetchGames();
        console.log(data);
        return data.results;
    }
    catch(err){
        console.log(err)
    }
}

export default getGames;