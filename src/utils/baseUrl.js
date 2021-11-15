export function baseurl(endpoint,qparams) {
    const KEY= 'key=6f4467deedf54c548c736de794dd1f31';
    const local = `https://api.rawg.io/api/`;
 /*   const local = '/api/'; */
    return qparams  ? `${local}${endpoint}?${KEY}&${qparams}` : `${local}${endpoint}?${KEY}`; 
 }
 
 export const CONFIG = {
   headers: {
    'host': 'http://localhost:3000',
    'Access-Control-Allow-Origin': '*',
    "allowedHeaders": "Content-Type,Authorization",
    'Content-Type': 'application/json',
   }
 };