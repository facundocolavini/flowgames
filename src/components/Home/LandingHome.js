import Navbar from "../Navbar/Navbar";
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

export const LandingHome = () => {
    return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/game/:idGame" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
    )
}
