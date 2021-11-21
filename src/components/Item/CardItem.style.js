import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Card = styled.div`

   position: relative;
    width:100%;
    height:20rem;
    border-radius: 10px;
    overflow: hidden;
`;

export const CardBody = styled.div`
position:absolute;
top:0;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:space-around;
padding:1em;
padding-left: 30px;
padding-bottom: 2em;
width:100%;
height:100%;
z-index:1;
 background:${({theme}) => theme.gradients.gradientCard};

`;

export const ImageItem = styled.img`
    position:relative;
    height:21rem;
    width:100%;
    object-fit:cover;
`;

export const TitleItem = styled.h2`
    margin-bottom:.5em;
    color: ${({theme}) => theme.fontColors.white};
    font-size: ${({ theme }) => theme.fontSizesDesktop.medium.fontSize};
    font-style: ${({ theme }) => theme.fontSizesDesktop.regular.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.medium.fontWeight};
    color: ${({theme}) => theme.fontColors.white};
   
`;

export const ButtonItem = styled(Link)`

    border:none;
    width: 155px;
    padding:.3em;
    margin:0;
    color: ${({theme}) => theme.fontColors.white};
    font-size: ${({ theme }) => theme.fontSizesDesktop.regular.fontSize};
    font-style: ${({ theme }) => theme.fontSizesDesktop.regular.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
    background: ${({ theme }) => theme.colors.background2};
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
