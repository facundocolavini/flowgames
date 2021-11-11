import {ThemeProvider} from 'styled-components';
import loading from './assets/images/loading.gif';
import Navbar from "./components/Navbar/Navbar";
import { LandingHome } from './components/Home/LandingHome';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import GlobalStyles, { Loading } from './glogalStyles';
import { useEffect, useState ,React} from 'react';
import fetchGames from './utils/fetchGames';

const theme = {
    colors: {
      body:'#121212',
      background1:'#2A2A2A',
      background2:'#0078F2'
    },
    fontColors: {
      white:'#FFFFFF',
      color2:'#9A9A9A'
    },
    fontSizesDesktop:{
      regular:{
        fontSize:'1.375rem',
        fontWeight:'400',
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
      gradientCard:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 40.04%, rgba(0, 0, 0, 0) 100%)"
    },

}




function App() {
  const [games, setGames] = useState([]);
  const [error ,setError] = useState({
    isError:false,
    erroMEssage:"Games not found..."
  });
  //Component did mount
  useEffect(() => {
      fetchGames()
      .then(result => setGames(result))
      .catch(err => setError({
          isError:true,
          errorMessage:err
    }));
  },[]);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyles/>
      <Navbar/>     
      {/* Home */}
      <Routes>
        <Route path="/" exact element={
          error.isError ?  <Loading src={loading}/> : <LandingHome games={games}/> 
   
        } />
      </Routes>
    </Router>
    </ThemeProvider>  
  );
}

export default App;
