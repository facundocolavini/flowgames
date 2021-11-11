
import {Container} from '../../glogalStyles';
import {Title,WrapFlex} from './LandingHome.style';
import ListItems from '../ListItems/ListItems';

import {A} from './LandingHome.style';

/* import {ContainerCards} from '../Container/Container.style'; */
export const LandingHome = ({games}) => {

    return (
        <Container>
            <WrapFlex>
                <Title>JUEGOS</Title>
                <A to="/cart">View More</A>
            </WrapFlex>
            <ListItems games={games}/>
        </Container>
    )
}
