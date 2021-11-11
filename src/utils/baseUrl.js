export function baseurl(endpoint) {
    const KEY= 'key=6f4467deedf54c548c736de794dd1f31';
    const local = `https://api.rawg.io/api/games?${KEY}/`;
 /*   const local = '/api/'; */
 
   return `${local}${endpoint}`;
 }
 
 export const CONFIG = {
   headers: {
     'Access-Control-Allow-Origin': '*',
     'Content-Type': 'application/json',
   }
 };