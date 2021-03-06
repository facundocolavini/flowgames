import {ThemeProvider} from 'styled-components';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import GlobalStyles from './glogalStyles';
import React from 'react';
import CartContextProvider from './components/Contexts/CartContext';


const theme = {
    colors: {
      body:'#121212',
      background1:'#2A2A2A',
      background2: '#133AC3',
      background3:'#2F3135'
    },
    fontColors: {
      white:'#FFFFFF',
      color2:'#9A9A9A'
    },
    fontSizesDesktop:{
      regular:{
        fontSize:'1.375rem',
        fontWeight:'400',
        fontStyle:'normal',
      },
      medium:{
        fontSize:'1.555555rem',
        fontWeight:'500',
        fontStyle:'normal',
      },
      bold:{
        fontSize:'2rem',
        fontWeight:'700',
        fontStyle:'normal',
      }
    },
    spacing:{
      small:{
        padding:'0.5em',
        margin:'0.5em',
      },
      large:{
        padding:'5em',
        margin:'15em',
      }
    },
    breakpoints:{
      mobile:"768px",
      md:"991px"
    },
    gradients:{
      gradientCard:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 40.04%, rgba(0, 0, 0, 0) 100%)",
      overlayImage:"180deg, rgba(18, 18, 18, 0) 1.01%, rgba(18, 18, 18, 0) 1.02%, rgba(12, 12, 12, 0.49) 1.03%, #050404 55.7%",
    },

}

function App() {

  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/genre/:idGenre" element={<ItemListContainer/>}/>
                <Route path="/item/:slug/:idGame" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>  
    </CartContextProvider>
  );
  
}

export default App;
