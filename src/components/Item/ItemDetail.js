import React from 'react'
import {GridGalleryDetails,ContentInfoR,ContentInfo,FlexPrice,Description,About,GridInfoDetail,InfoItem,Gallery,ImgGalleryItem,ImgPrimary,ScoreTitle,RaitingTitle,FlexRaiting,FlexTitle,FlexDate,PlatformItem,TitleItem,DateItem,ContainerImage,ContainerDetailItem,Column1,Column2} from '../ItemDetailContainer/ItemDetailContainer.style';
import ItemCount from '../ItemCount/ItemCount';
/* import backgroundImage from '../../assets/images/game.png'; */
import  loading from '../../assets/images/loading.gif';
import {Loading} from '../../glogalStyles';
const ItemDetail = ({item}) => {
    const onAdd = (q) => {
        alert("You selected " + q + " games.");
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
                        <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
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
