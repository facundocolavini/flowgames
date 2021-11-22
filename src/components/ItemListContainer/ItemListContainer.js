import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Title,WrapFlex} from './ItemListContainer.style';
import customFetch from '../../utils/customFetch';
import {Container} from '../../glogalStyles';
import  ItemList from '../ItemsList/ItemList';
const {data}  = require('../../utils/games');

const ItemListContainer = () => {
  const [allGames, setGames] = useState([]);
  const { idGenre } = useParams();
 
      //componentDidUpdate
      useEffect(() => {
        customFetch(0, data.filter(item => {
            if (idGenre === undefined) return item;
            return parseInt(item.genres.id)  === parseInt(idGenre)
        }))
            .then(result => setGames(result))
            .catch(err => console.log(err))
    }, [allGames, idGenre]);

    return (
        <Container>
            <WrapFlex>
            <Title>Home Games</Title>
            {/* <A to="/categories">View More</A> */}
            </WrapFlex>
            <ItemList items={allGames}/>
        </Container>
    )
}

export default ItemListContainer;
