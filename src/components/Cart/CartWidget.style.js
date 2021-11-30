import styled from 'styled-components';


export const NotificationCart = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background:${({ theme }) => theme.colors.background2};
    width:25px;
    height:25px;
    top:-10px;
    right:0;
    left:-5px;
    transition: all 0.3s ease-in-out;
    color: #fff;
    border-radius:50%;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        top:0;
        width:20px;
        height:20px;
        font-size:1rem;
        padding:.6em;
    }   
   
`;


