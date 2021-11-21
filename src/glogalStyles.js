import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *,::after,::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,html{
        font-size: 18px;
        font-family: 'DM Sans', sans-serif;
     
        margin:0;
        padding:0;
        background-color:${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.fontColors.white};
        position: relative;
        
        height: 100vh;

    }
    p{
        line-height: 1.5;
    }
    a,ul,li,button{
        text-decoration: none;
        list-style-type:none;
        cursor: pointer;
    }
    img{
        max-width: 100%;
    }
  
`;  
export const Container = styled.div`
    z-index:1;
    width:100%;
    max-width:1440px;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-left:30px;
        padding-right:30px;
    }
`;

export const Loading = styled.img`
    display:grid;
    grid-column:1/4;
    place-items:center;
    text-align: center;
    font-size:1.5rem;
    height:100vh;
    width:100%;
    object-fit:contain;
    margin: 0 auto;
    width:150px;
    justify-content:center;
    align-items:center;
`;
export default GlobalStyles