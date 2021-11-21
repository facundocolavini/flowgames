export function baseurl(endpoint) {
   const local = `https://api.rawg.io/api/`;
   return `${local}${endpoint}`; 
 }
 
 export const CONFIG = {
   KEY: 'key=6f4467deedf54c548c736de794dd1f31',
   PAGE: 'page',
   PAGE_SIZE: 'page_size',
   SEARCH: 'search'
 };