import {useState, React} from 'react'
import logo from '../../assets/icons/logo.svg';
import { Nav,NavContainer,NavLink,Bars,NavMenu,Close} from './Navbar.style';

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
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/cart" >Cart</NavLink>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
