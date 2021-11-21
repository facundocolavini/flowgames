import React, { useEffect, useState } from 'react';
import getGames from '../../utils/getGames';
import {Title,WrapFlex} from './ItemListContainer.style';
import {A} from './ItemListContainer.style';
import {Container} from '../../glogalStyles';
import  ItemList from '../ItemsList/ItemList';
const ItemListContainer = () => {
  const [games, setGames] = useState([]);
  //Component Did Mount
    useEffect(()=>{
      getGames(2000)
      .then(data=>{
        setGames(data);
      })
    
    },[]);

    return (
        <Container>
            <WrapFlex>
            <Title>Home Games</Title>
            <A to="/categories">View More</A>
            </WrapFlex>
            <ItemList items={games}/>
        </Container>
    )
}

export default ItemListContainer;
