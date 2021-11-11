import React from 'react'
import {ContainerList} from './ListItems.style';
import CardItem from '../Card/CardItem';
const ListItems = ({games}) => {


    return (
        <ContainerList>
            <CardItem games={games} />
        </ContainerList>
    )
}

export default ListItems
