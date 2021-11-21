import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../Item/ItemDetail'

import {getGameDetails} from '../../utils/getGames';

const ItemDetailContainer = () => {
    const { idGame } = useParams();
    const [game, setGame] = useState([]);
    //Component Did Mount
    useEffect(()=>{
        getGameDetails(2000,idGame)
        .then(data=>{
        setGame(data);
        })  
    },[idGame])
    return (
        /* Aca iran los detalles de un item especifico Component Did mount */
        <>
            <ItemDetail item={game}/>
        </>
    

     
    )   
}

export default ItemDetailContainer
