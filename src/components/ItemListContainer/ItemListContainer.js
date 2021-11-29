import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Title,WrapFlex} from './ItemListContainer.style';
import customFetch from '../../utils/customFetch';
import {Container} from '../../glogalStyles';
import  ItemList from '../ItemsList/ItemList';
/* import { CartContext } from '../../CartContext'; */
const {data}  = require('../../utils/games');

const ItemListContainer = () => {
    const [allGames, setGames] = useState([]);
    const [titleSection, setTitleSection] = useState('');
    const { idGenre } = useParams();
 
    const titleGenre = (idGenre) => {
        if (idGenre === undefined) return  setTitleSection('All Games');    
        return setTitleSection(data.filter(item => parseInt(item.genres.id)  === parseInt(idGenre))[0].genres.name);
    }
    //componentDidUpdate
      useEffect(() => {
          customFetch(0, data.filter(item => {
              if (idGenre === undefined) return item;
              return parseInt(item.genres.id)  === parseInt(idGenre)
            }))
            .then(result => setGames(result))
            .catch(err => console.log(err))
            titleGenre(idGenre);
    }, [idGenre]);


        console.log('ItemListContainer');
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
