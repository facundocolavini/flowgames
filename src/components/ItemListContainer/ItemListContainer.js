import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Title,WrapFlex} from './ItemListContainer.style';
/* import customFetch from '../../utils/customFetch'; */
import {Container} from '../../glogalStyles';
import  ItemList from '../ItemsList/ItemList';
/* import { CartContext } from '../../CartContext'; */
/* const {data}  = require('../../utils/games'); */
import {getAllGames} from '../../utils/firestoreFetch';

const ItemListContainer = () => {
    const [allGames, setGames] = useState([]);
    const [titleSection, setTitleSection] = useState('');
    const { idGenre } = useParams();



    //componentDidUpdate
      useEffect(() => {
/*           customFetch(0, data.filter(item => {
              if (idGenre === undefined) return item;
              return parseInt(item.genres.id)  === parseInt(idGenre)
            }))
            .then(result => setGames(result))
            .catch(err => console.log(err))
             */
            /* Reto clase 12 */ 
            const titleGenre = (idGenre) => {
                if (idGenre === undefined) return  setTitleSection('All Games');    
                return setTitleSection(idGenre.toUpperCase());
            }
            
            getAllGames(idGenre)
    
            .then(result =>setGames(result))
            .then(result=>console.log(result))
            .then(titleGenre(idGenre))
            .catch(err => console.log(err))
           
    }, [idGenre]);

    return (
        <Container>
            <WrapFlex>
            <Title>{titleSection}</Title>
            </WrapFlex>
            <ItemList items={allGames}/>
        </Container>
    )
}

export default ItemListContainer;
