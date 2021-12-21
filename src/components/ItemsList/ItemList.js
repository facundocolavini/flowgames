import React from 'react'
import {ContainerList} from './ItemLists.style';
import CardItem from '../Item/CardItem';
import {Loading} from '../../glogalStyles';
import  loading from '../../assets/images/loading.gif';
const ItemsList = ({items}) => {
    return (
        <ContainerList>
            {
                items.length > 0 
                ?items.map(item=><CardItem key={item.id} id={item.id} slug={item.slug} name={item.name} image={item.background_image} price={item.price} />)
                :<Loading src={loading}></Loading>
            }
        </ContainerList>
    )
}

export default ItemsList;
