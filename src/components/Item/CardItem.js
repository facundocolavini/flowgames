import React from 'react'
import {Card,CardBody,ImageItem,TitleItem,ButtonItem} from './CardItem.style'


const CardItem = ({id,slug,name,image,price}) => {
    return (
        <>
            {   
                <Card key={id}>   
                    <ImageItem src={image} alt={name}/>
                    <CardBody>
                        <TitleItem>{name}</TitleItem>
                        <TitleItem>${price}</TitleItem>
                        <ButtonItem  to={`/item/${slug}/${id}`} id={id} type="button">BUY NOW</ButtonItem>
                    </CardBody>
                </Card> 
            } 
        </>
    )
}

export default CardItem
