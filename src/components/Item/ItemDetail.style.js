import styled from 'styled-components';
import {Container} from '../../glogalStyles';
import {Link} from 'react-router-dom';



export const ContainerImage = styled.div`
    position: relative;
    z-index: 1;
    top:0px;
    max-height: 100%;
    height: 100%;
    box-sizing: content-box;
    display: block;
    justify-content: center;   
    align-items: center;
    background-size: cover;
   
    &::before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        display: flex;
        padding:6em 0;
        bottom: 0px;
        width: 100%;
        height: 100vh;
        right: 0;
        background-image: linear-gradient(180deg, rgba(18, 18, 18, 0) 1.01%, rgba(18, 18, 18, 0) 1.02%, rgba(12, 12, 12, 0.49) 1.03%, #050404 55.7%) ,${({backImg})=> (`url(${backImg})`)}   ;
        background-size: cover;
        background-repeat: no-repeat;
        z-index:1;
        background-color: rgba(0, 0, 0, 0.5);

    }

`;
export const ContainerDetailItem = styled(Container)`
    position: relative;
    bottom:0;
    display:grid;
    ${Container};
    grid-template-columns: 60% 40%;
    height: 100vh;
    grid-gap: 5em 5px;
    margin-top: 5rem;
    grid-template-areas:
        "gallery info";
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display:grid;
        grid-template-columns: 1fr;
            align-items: flex-end;
        grid-gap: 1em;
        grid-template-areas:
        "gallery" 
        "info";
    }
`;

/* COLUMNA IZQUIERDA DONDE SE MOSTRARA LA INFORMACION DEL JUEGO  E IMAGENES*/
export const Column1 = styled.div`
    grid-area: gallery;

`;
export const GridGalleryDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
    "detailTitle"
    "detailsDate"
    "detailGallery1"
    "detailGallery2";
`;
export const FlexDate = styled.div`
    grid-area: detailsDate;
    display:flex;
    margin-bottom: 1em;
    align-items: center;
    
`;
export const DateItem = styled.div`
    background: ${({theme})=> theme.colors.background3};
    padding: .3em .5em;
    margin-right: 1em;
    border-radius: 0.6em;
    font-weight: normal;
    line-height: 15px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:flex;
        flex-direction: column;
       
        font-size: 10px;
        text-align: center;
    }

`;
export const PlatformItem = styled.div`
    font-style: normal;
    font-weight: normal;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin: 0.3em;
    line-height: 15px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 12px;
     
    }
`;
export const FlexTitle = styled.div`
    grid-area: detailTitle;
    display:flex;
    align-items: center;
    
`;
export const TitleItem = styled.div`
    font-size: 4.5rem;
    font-style: normal;
    font-weight: bold;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 2.5rem;
        text-align: center;
    }
`;
export const Gallery = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr ;
    border-radius: 0.6em;
    grid-gap: 1em;

`;
export const ImgPrimary = styled.img`
  
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:grid;
        grid-template-columns: 1fr ;
    height: 100%;
    object-fit: contain;
        width:fit-content;
}
`;
export const ImgGalleryItem = styled.img`
    display: block;
    margin-top:.3em;
    border-radius: 0.6em;
`;
export const Column2 = styled.div`
    display: grid;
    box-sizing: content-box;
    grid-area: info;    
    height: 765px;
 
`;
export const GridInfoDetail = styled.div`
    display: grid;
    grid-gap: 2em;
    grid-template-areas:
    "ratigin"
    "about";
`;
export const FlexRaiting = styled.div`
    grid-area: ratigin;
    display:flex;
    text-align: left;
    justify-content: space-between;
    align-items: flex-end;
    word-wrap: break-word;
    line-height: 20px;
    overflow-wrap: normal;
    height: 180px;
    
`;

export const RaitingTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 15px;
`;

export const ScoreTitle = styled.div`
font-style: normal;
font-weight: bold;
font-size: 72px;
line-height: 15px;
height: fit-content;
`;


export const InfoItem = styled.div`
    grid-area: about;
    background: ${({theme})=> theme.colors.body};
    height: 536px;
    padding: 1em;
  
`;

export const About = styled.div`
    font-weight: normal;
    font-size: 30px;
    margin-bottom:.5em;
    line-height: 25px;
    height: fit-content;  
    color: ${({theme})=> theme.fontColors.white};
`;

export const Description = styled.div`
    font-weight: normal;
    font-size: 26px;
    margin-bottom:1em;

    height: 35%;
   
      text-overflow: ellipsis;
      overflow: hidden;

    line-height: 25px;
    color: ${({theme})=> theme.fontColors.color2};
`;

export const FlexDeveloper = styled.div`
    display:flex;
    justify-content: space-between;
    margin:1em 0;
    border-bottom:1px solid #2A2A2A;

`;

export const FlexPublisher = styled.div`
    display:flex;
    justify-content: space-between;
    margin:1em 0;
    border-bottom:1px solid #2A2A2A;
`;

export const FlexPrice = styled.div`
    display:flex;
    justify-content: space-between;
    margin:1em 0;
    border-bottom:1px solid #2A2A2A;
`;

export const ContentInfo = styled.div`
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    margin-right: .5em;
    color: ${({theme})=> theme.fontColors.color2};
`;

export const ContentInfoR = styled.div`
    font-style: normal;
    font-size: 16px;
    padding:0;
    color: ${({theme})=> theme.fontColors.white};
`;

export const FlexBuy = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:1em 0;
`;

export const BtnBuy = styled.button`
    background: ${({theme})=> theme.colors.background2};
    border:none;
    color: ${({theme})=> theme.fontColors.white};
    width: fit-content;
    padding: .5em 1em;
    height: 40px;
    line-height: 15px;
    font-size: 20px;
    border-radius:10px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
    &:hover {
        transition: all .3s ease-in-out;
        background: #0f44ff;
    }
`;  
export const BtnToCart = styled(Link)`
        background: ${({theme})=> theme.colors.background2};
    border:none;
    color: ${({theme})=> theme.fontColors.white};
    width: fit-content;
    padding: .5em 1em;
    height: 40px;
    line-height: 15px;
    font-size: 20px;
    border-radius:10px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
    &:hover {
        transition: all .3s ease-in-out;
        background: #0f44ff;
    }
`;

export const InputQuantity = styled.input`
        height: 40px;
        width: 50px;
        text-align:center;
        color: ${({theme})=> theme.fontColors.white};
        filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
        background: ${({theme})=> theme.colors.background3};
        border:none;
`;

export const BtnAdd = styled.button`
    margin-right:1em;
    color: ${({theme})=> theme.fontColors.white};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width:33px;
    border:none;
    font-size: 20px;
    margin-left:1em;
    background: ${({theme})=> theme.colors.background3};
    &:hover{
        transition: all .3s ease-in-out;
        background: ${({theme})=> theme.colors.background2};
    }
`;

export const BtnSubstract = styled.button`
    color: ${({theme})=> theme.fontColors.white};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width:33px;
    border:none;
    font-size: 20px;
    margin-left:1em;
    background: ${({theme})=> theme.colors.background3};
    &:hover{
        transition: all .3s ease-in-out;
        background: ${({theme})=> theme.colors.background2};
    }
`;

export const FlexQuantity = styled.div`
    display:flex;
  
`

export const Stock = styled.div`
    font-style: normal;
    font-size: 22px;
    text-align: right;
    margin:1em 0;
`;