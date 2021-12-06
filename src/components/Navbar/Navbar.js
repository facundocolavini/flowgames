import {useState, React} from 'react'
import logo from '../../assets/icons/logo.svg';
import CartWidget from '../Cart/CartWidget';
import { Nav,NavContainer,NavLink,Bars,NavMenu,Close,CartIcon} from './Navbar.style';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    const clickHandler = () => {
        setOpen(!isOpen);
    }
    
    return ( 
        <Nav> 
            <NavContainer>
                <NavLink to="/">
                    <img src={logo} alt="logo"/>
                </NavLink>
                {isOpen ?<Close onClick={()=>clickHandler(!isOpen)}/>:<Bars onClick={()=>clickHandler(!isOpen)}/>} 
                <NavMenu isOpen={isOpen}>
                    <NavLink to="/genre/aTX6ncjEf0TtFEul6eGp">Action</NavLink>
                    <NavLink to="/genre/88vWH3X4UqApy6SOJrf0">Shooter</NavLink>
                    <NavLink to="/genre/2SmRUXYcG3MpKFPSDQ9C">Adventure</NavLink>
                    <NavLink to="/cart" ><CartIcon/><CartWidget/></NavLink>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
