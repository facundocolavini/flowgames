import styled from 'styled-components';

export const OutStock = styled.div`
    background: ${({theme})=> theme.colors.background1};
    border:none;
    color: ${({theme})=> theme.fontColors.white};
    width: fit-content;
    padding: .5em 1em;
    height: 40px;
    line-height: 1;
    font-size: 20px;
    border-radius:10px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.56));
    
`;
export const ContainerCountItems = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-space-around;
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

export const InputQuantity = styled.div`
        height: 40px;
        width: 50px;
        text-align:center;
        line-height: 40px;
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