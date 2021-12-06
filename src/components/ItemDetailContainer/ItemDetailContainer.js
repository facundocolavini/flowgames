import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../Item/ItemDetail'
/* import customFetch from "../../utils/customFetch"; */
/* import {getGameDetails} from '../../utils/getGames'; */
/* const {data}  = require('../../utils/games'); */
import { GetOne } from '../../utils/firestoreFetch';

const ItemDetailContainer = () => {

    const { idGame } = useParams();
    const [game, setGame] = useState([]);
    //Component Did Mount
    useEffect(() => {
        /* Reto Clase 12 */
        GetOne(idGame)
        .then(result => setGame(result))
        .catch(error => console.log(error));
/*         customFetch(2000, data.find(item => item.id === parseInt(idGame)))
            .then(result => setGame(result))
            .catch(err => console.log(err)) */

            
    }, [idGame]);
 
    return (
        /* Aca iran los detalles de un item especifico Component Did mount */
        <>
            <ItemDetail item={game}/>
        </>
    )   
}

export default ItemDetailContainer
