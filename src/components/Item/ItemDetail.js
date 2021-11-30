import React, { useState,useContext } from 'react'
import {BtnToCart,GridGalleryDetails,ContentInfoR,ContentInfo,FlexPrice,Description,About,GridInfoDetail,InfoItem,Gallery,ImgGalleryItem,ImgPrimary,ScoreTitle,RaitingTitle,FlexRaiting,FlexTitle,FlexDate,PlatformItem,TitleItem,DateItem,ContainerImage,ContainerDetailItem,Column1,Column2} from './ItemDetail.style';
import ItemCount from '../ItemCount/ItemCount';
import  loading from '../../assets/images/loading.gif';
import {Loading} from '../../glogalStyles';
import { CartContext } from '../Contexts/CartContext';

const ItemDetail = ({item}) => {
    const [itemCount,setItemCount] = useState(0);
    const test= useContext(CartContext);
    


    const onAdd = (q,inStock) => {
        //Por esto implementamos el Context
        console.log(q,'q'); 
/*         console.log(inStock,'Instock');  */
        if(q === 0) return;
        alert("You selected " + q + " games.");
        setItemCount(q);
        test.addToCart(item,q);
    }

    return (
        <>
        {       
            item && item.name ?
             <ContainerImage backImg={item.background_image} alt="asdsa">  
             <ContainerDetailItem>
                <Column1>
                    <GridGalleryDetails>
                        <FlexDate>
                            <DateItem>{item.released}</DateItem>
                            {item.platforms.map(platform=><PlatformItem key={platform.platform.id} >|{platform.platform.name}|</PlatformItem>)}
                        </FlexDate>
                        <FlexTitle>
                            <TitleItem>{item.name}</TitleItem>
                        </FlexTitle>
                         {/* Reemplazar con slider a futuro */}
                        <ImgPrimary src={item.short_screenshots[1].image}/>
                        <Gallery>
                            <ImgGalleryItem src={item.short_screenshots[2].image}/>
                            <ImgGalleryItem src={item.short_screenshots[3].image}/>
                            <ImgGalleryItem src={item.short_screenshots[4].image}/>
                        </Gallery>
                    </GridGalleryDetails>
                </Column1>
                <Column2>
                    <GridInfoDetail>
                    <FlexRaiting>
                        <RaitingTitle>
                            Score 
                            Raiting 
                        </RaitingTitle>
                        <ScoreTitle>{item.metacritic}</ScoreTitle>
                    </FlexRaiting>
                    <InfoItem>
                        <About>About</About>
                        <Description>{item.description}</Description>
{/*                      <FlexDeveloper>
                         <ContentInfo>Developer</ContentInfo>
                        {
                             item.developers.lenght > 0
                             ? item.developers.map(dev=><ContentInfoR key={dev.id}>|{dev.name}|</ContentInfoR>)
                             :item.developers.map(dev=><ContentInfoR key={dev.id}>{dev.name}</ContentInfoR>)
                        }
                     </FlexDeveloper>
                     <FlexPublisher>
                         <ContentInfo>Publisher</ContentInfo>
                         {
                             item.publishers.lenght > 1 
                             ? item.publishers.map(publisher=><ContentInfoR key={publisher.id}>|{publisher.name}|</ContentInfoR>)
                             :item.publishers.map(publisher=><ContentInfoR key={publisher.id}>{publisher.name}</ContentInfoR>)
                        }

                     </FlexPublisher> */}
                        <FlexPrice>
                            <ContentInfo>Price</ContentInfo>
                            <ContentInfoR>${item.price}</ContentInfoR>
                        </FlexPrice>
                        {
                            itemCount === 0
                            ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                            :<BtnToCart to='/cart'>CHECK CART</BtnToCart>
                        }
                        
                    </InfoItem>
                    </GridInfoDetail>
                </Column2>
            </ContainerDetailItem>
        </ContainerImage> 
        :<Loading src={loading}></Loading>
        }
        </>
    )
}

export default ItemDetail
