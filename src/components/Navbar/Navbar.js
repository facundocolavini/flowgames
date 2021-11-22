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
                    <NavLink to="/genre/4">Action</NavLink>
                    <NavLink to="/genre/2">Shooter</NavLink>
                    <NavLink to="/genre/3">Adventure</NavLink>
                    <NavLink to="/cart" >Cart</NavLink>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
