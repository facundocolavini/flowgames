import styled from 'styled-components';
import {Container} from '../../glogalStyles';
import {Link} from 'react-router-dom';


export const ContainerCart = styled(Container)`
    ${Container};
    display: grid;
    grid-gap: 2em;
    margin-top: 8em;
    height: 100vh;
    grid-template-areas:
        "title"
        "btns"
        "cart";
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display:grid;
        grid-template-columns: 1fr;
        align-items: flex-end;
        grid-gap: 5em;
        grid-template-areas:
        "title" 
        "btns"
        "cart";
    }
`;

export const TitleCart = styled.div`
    grid-area: title;
    font-size: ${({ theme }) => theme.fontSizesDesktop.bold.fontSize};
    font-style: ${({ theme }) => theme.fontSizesDesktop.bold.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        text-align: center;
    }
`;

export const Btns = styled.div`
    grid-area: btns;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-style: ${({ theme }) => theme.fontSizesDesktop.regular.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1rem;
    }
`;

export const BtnClearCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    height:40px;
    width: 135px;
    border-radius:10px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
    cursor: pointer;
    &:hover {
        transition: all .3s ease-in-out;
        background: #0f44ff;
    }
    background-color: ${({ theme }) => theme.colors.background2};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: fit-content;
    }


`;
export const BtnShop = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    height:40px;
    width: 135px;
    color:${({ theme }) => theme.fontColors.white};
    border-radius:10px;
    background-color: ${({ theme }) =>  theme.colors.background3};
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
    &:hover {
        transition: all .3s ease-in-out;
        background: #0f44ff;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: fit-content;
    }
`;

export const ContentCart = styled.div`
    display: grid;
    grid-template-columns: auto 20px minmax(300px,400px);
    grid-template-areas: 
    "listproducts spacing summary";
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
        grid-template-columns: 1fr ;
        grid-gap:1em;
        grid-template-areas: 
        "summary"
        "listproducts";
    }
`;

export const ListProductsContainer = styled.div`
    grid-area: listproducts;
    scroll-behavior: smooth;
    overflow-y: scroll;
    height: 600px;
    padding: 2em;
    background-color: ${({ theme }) => theme.colors.background1};
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding:1em;
    }
`;

export const SummaryContainer = styled.div`
    height: fit-content;
    grid-area: summary;
    padding:1em 1.5em;
    background-color: ${({ theme }) => theme.colors.background1};
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding:1em;
    }
`;

export const Product = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${({ theme }) => theme.colors.body};
    border-radius: 10px;
    margin-bottom: 1em;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){

    }

`;
export const ProductDetails = styled.div`
    display: grid;
    grid-template-areas: 
    "productImage productDetail";
    grid-gap:1em;
    grid-template-columns: 30% 1fr;

    grid-template-rows: 172px;
    padding: .7em;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: 1fr;
        grid-template-areas: 
            "productImage"
            "productDetail";
    }
`;
export const ImageProduct = styled.img`
    grid-area: productImage;

    border-radius: 10px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
    background-size: cover;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:flex;
        margin:0 auto;
        justify-content:center;
        height: 100%;
    }
`;

export const ProductDetail = styled.div`
    grid-area: productDetail;
    display: grid;
    grid-template-areas:
    "detailsRow1"
    "detailsRow2";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr ;
`;

export const DetailsRowTop = styled.div`
    grid-area: detailsRow1;
    display: grid;
    border-bottom:1px solid #9A9A9A;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: fit-content;
    grid-template-areas: 
    "cleft cright";

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: 1fr;
        text-align:center;
        grid-template-areas: 
        "cleft"
        "cright";
   
    }
`;

export const WrapperTexts = styled.div`
    grid-area: cleft;
    width:100%;
    justify-content:center;
    align-items:center;
    margin:0;
  
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
       display:grid;
       flex-wrap:wrap;
        width:fit-content;
        margin:0 auto;
        text-align:center;
        align-items:center;
        justify-items:center;
        justify-content:center;
    }

`;
export const DetailPrice = styled.div`
    display:flex;

`;
export const TextDescription = styled.div`
    display:flex;
    font-size:1rem;
    margin: 0 0 .3em  0;
    font-style: ${({ theme }) => theme.fontSizesDesktop.bold.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
    color : ${({ theme }) => theme.fontColors.color2};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
        font-size: 1.2rem;
        padding-right: .5em;
        margin: 0 0 .5em  0;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.1rem;
        text-align:center;
        margin: 0 0 1em  0;
    
    }
`;
export const TextValue = styled.div`
    font-size:1rem;
    margin-left:.2em;

    font-style: ${({ theme }) => theme.fontSizesDesktop.bold.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
    color : ${({ theme }) => theme.fontColors.white};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1rem;
        line-height:1.2;
    
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
        font-size: 1.2em;
        line-height:1.2;
    }
`;

export const WrapperTotal = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display:flex;
    grid-area: cright;
    flex-direction:row-reverse;
    align-items:center;

    margin:0 ;
    justify-content: center;
    text-align:center;
  }
`;
export const BtnDelete = styled.button`
    grid-area: btnDel;
    display:flex;
    justify-content:center;
    align-items:center;
    width:30px;
    height:26px;
    color:${({ theme }) => theme.fontColors.white};
    border:none;
    padding:1em;
    border-radius:10px;
    background-color: ${({ theme }) => theme.colors.background2};
   
    &:hover {
        transition: all .3s ease-in-out;
        background: #0f44ff;
    }
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display:flex;
    justify-content:center;
    line-height:1.5em;
    width:35px;
    box-align:center;
    height:28px;
    align-items:center;
    grid-area: cright;
    
  }
`;

export const DetailsRowBot = styled.div`
    display:flex;
    grid-area: detailsRow2;
    justify-content:space-between;
    align-items:flex-end;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
            display:flex;
            flex-wrap:wrap;
            align-items:center;
            justify-content:center;
        }
  
`;

export const ProductQuantity = styled.div`
        display:flex;
        width:100%;
        align-items:center;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
            display:flex;
            justify-content:center;
            align-items:center;
            margin:0 auto;
        }
`;


export const InputQ = styled.div`
        height: 40px;
        width: 50px;
        border-radius: 10px;
        text-align:center;
        line-height: 40px;
        margin:0 .3em;
        color: ${({theme})=> theme.fontColors.white};
        filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
        background: ${({theme})=> theme.colors.background3};
        border:none;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
            display:flex;
            justify-content:center;
            align-items:center;
            font-size: 1.5rem;
            height: 60px;
            width: 70px;   
          
        }
`;

export const BtnAddProduct = styled.button`
    color: ${({theme})=> theme.fontColors.white};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width:33px;
    border:none;
    font-size: 20px;
    height: 40px;
    background: ${({theme})=> theme.colors.background3};
    &:hover{
        transition: all .3s ease-in-out;
        background: ${({theme})=> theme.colors.background2};
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.5rem;
        width:50px;
        height: 60px;
    }
`;

export const BtnSubstractProduct = styled.button`
    color: ${({theme})=> theme.fontColors.white};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width:33px;
    border:none;
    font-size: 20px;
    height: 40px;

    background: ${({theme})=> theme.colors.background3};
    &:hover{
        transition: all .3s ease-in-out;
        background: ${({theme})=> theme.colors.background2};
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.5rem;
        width:50px;
        height: 60px;
    }

`;



export const WrapperSummary = styled.div`
    display:grid;
    margin-top:1em;
    grid-gap:1em 0;
    grid-template-areas: 
    "subttotal"
    "shipping"
    "total";
`;

export const SummarySubTotalFlex = styled.div`
    grid-area: subttotal;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const TextSummaryBold = styled.h3`
    font-style: normal;
    font-weight: normal;
    color: ${({theme})=> theme.fontColors.color2};
    font-size: 1.3rem;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.2rem;
 
    }
`;
export const TextSummaryValue = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.1rem;
 
    }
`;
export const SummaryShippingFlex = styled.div`
    grid-area: shipping;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
export const WrapperSummaryTotal = styled.div`
    grid-area: total;
    display:flex;
    align-items:center;
    margin:1em 0;
    border-top:1px solid #9A9A9A;
    justify-content:space-between;
`;
export const TextSummaryBoldTotal = styled.h3`
    font-style: normal;
    font-size: 1.3rem;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.1rem;
 
    }

`;
export const TextSummaryValueTotal = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.1rem;
 
    }
`;

export const BtnFinishBuy = styled.button`
    width:100%;
    height:40px;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 15px;
    border:none;
    border-radius:10px;
    background: ${({theme})=> theme.colors.background2};
    color: ${({theme})=> theme.fontColors.white};
    &:hover{
        transition: all .3s ease-in-out;
        background: ${({theme})=> theme.colors.background3};
    }
`;