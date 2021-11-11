import React from 'react'
import {Card,CardBody,ImageItem,TitleItem,ButtonItem} from './CardItem.style'


const CardItem = ({games}) => {
    console.log(games,'from card item')
    return (
        <>
            {   
                games.map(game=>(
                    <Card key={game.id}>   
                        <ImageItem src={game.background_image} alt={game.name}/>
                        <CardBody>
                            <TitleItem>{game.name}</TitleItem>
                            <TitleItem>Rating {game.rating_top}</TitleItem>
                            <ButtonItem type="button">BUY NOW</ButtonItem>
                        </CardBody>
                    </Card>
                ))
            } 
        </>
    )
}

export default CardItem
