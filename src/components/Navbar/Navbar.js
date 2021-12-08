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
                    <NavLink to="/genre/action">Action</NavLink>
                    <NavLink to="/genre/shooter">Shooter</NavLink>
                    <NavLink to="/genre/adventure">Adventure</NavLink>
                    <NavLink to="/cart" ><CartIcon/><CartWidget/></NavLink>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
