import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';
import {Container} from '../../glogalStyles'

export const Nav = styled.nav`
    background: ${({theme}) => theme.colors.body};
   
    display:flex;
    position:relative;
    
    justify-content:space-between;
    align-items:center;
    bottom:0;
    background: transparent;
    top:0;
    z-index:999;

`
export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height:fit-content;
    ${Container}
  
`;
export const NavLink = styled(Link)`
    color: #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    height:100%;
    cursor: pointer;
    &.active{
        display:flex;
        color:${({ theme }) => theme.colors.background2};
    }
    img{

        width:90px;
        height:90px;
        object-fit:contain;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        img{
            width:90px;
            height:90px;
            object-fit:contain;
        }
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color: #fff;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:block;
        position:absolute;
        z-index:10;
        right:0;
        margin: 0 0.8em;
        font-size:1.8rem;
        transition:all 0.5s;
        cursor:pointer;
    }
`

export const CartIcon = styled(FaShoppingCart)`

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        text-align:center;
        cursor:pointer;
    }
`

export const Close = styled(IoClose)`
        display:none;
        color: #fff;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:block;
        position:absolute;
        z-index:10;
        right:0;
        margin: 0 0.8em;
        font-size:1.8rem;
        transition:all 0.5s;
        cursor:pointer;
    }
`;

export const NavMenu = styled.div`
    display:flex;
    position:relative;
    align-items:center; 
    justify-content:space-between;

    a{
        font-size: ${({ theme }) => theme.fontSizesDesktop.regular.fontSize};
        font-style: ${({ theme }) => theme.fontSizesDesktop.bold.fontStyle};
        font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
        text-align:center;
        padding-left:1em;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:flex;
        position:relative;
        justify-content:flex-start;
        top:${({isOpen})=> (isOpen ? "91px " : "-180px")};
        right:0;
        left:0;
        border-radius:0 0 15px 15px;
        width:60%;
        height:fit-content;
        background:${({ theme }) => theme.colors.background1};
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:.5em;
        text-align:center;
        align-items:center;
        transition:all 0.3s;
      
        a{
            padding:0;
            font-size:1.2rem;
            
        }
    }   
`

