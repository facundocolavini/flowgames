import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizesDesktop.bold.fontSize};
    font-style: ${({ theme }) => theme.fontSizesDesktop.bold.fontStyle};
    font-weight: ${({ theme }) => theme.fontSizesDesktop.regular.fontWeight};
`
export const WrapFlex = styled.div`
    display: flex;
    justify-content: space-between;

    margin:${({ theme }) => theme.spacing.large.margin} 0 5em;
`


export const A = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizesDesktop.medium.fontSize};
    color: ${({ theme }) => theme.colors.background2};
    transition:all 0.5s;
    &:hover {
        transition:all 0.5s;
        color: ${({ theme }) => theme.colors.background2};
    }
`
