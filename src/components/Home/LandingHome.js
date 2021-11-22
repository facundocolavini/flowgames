import Navbar from "../Navbar/Navbar";
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";

export const LandingHome = () => {
    return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/genre/:idGenre" element={<ItemListContainer/>}/>
            <Route path="/item/:idGame" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    )
}
