import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [newCartVal, setnewCartVal] = useState([]);

    //Helpers
    const addToCart = (item, q) => {
        let inCart = isInCart(item);
        if (inCart === undefined) {
            setCartList([
                ...cartList,
                //Producto nuevo en mi carrito
                {
                    
                    idItem: item.id,
                    imageItem: item.background_image,
                    nameItem: item.name,
                    priceItem: item.price,
                    shippingItem: Math.round(Math.floor(Math.random() * 40)),
                    quantityItem: q
                }
            ])
        }else{

            //Hacer un Toast de que se agrego al carrito y que ya existe en el carrito
            let confirmation = window.confirm('You have this game on your cart,do you have to add another one?');
            if (confirmation){
                //No se actualiza en el carrito
                let newValue = inCart.quantityItem += q;
                for(const itemCart in cartList){
                    if(cartList[itemCart].idItem === item.id){
                        cartList[itemCart].quantityItem = newValue;
                    }
                }   
                setCartList([...cartList]);
            }
        }
    }   




    const isInCart = (item) => {
        return cartList.find(product => product.idItem === item.id);
    }
    
    const clean = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(product => product.idItem !== id));
    }

    const totalPerItem= (idItem) =>{
        let findItem = cartList.find(product => product.idItem === idItem);
        return findItem.priceItem * findItem.quantityItem;
    }

    const addProductOnCart = (quantityItem,idItem) => {
        setCartList(cartList.map(product => {
            if (product.idItem === idItem){
                product.quantityItem = quantityItem + 1;
            }
            return product;
        }))
    }

    const costShipping = () => {
        return cartList.map(inCart =>  inCart.shippingItem).reduce((total,nextItem) => total + nextItem,0);
      
    }

    const substractProductOnCart = (quantityItem,idItem) => {
            setCartList(cartList.map(product => {
                if (product.idItem === idItem){
                    product.quantityItem = quantityItem - 1;
                }
                if(product.quantityItem <=0){
                    product.quantityItem = 1;
                }
                return product;
            }))
    }

    const subTotal = () => {
       return cartList.reduce((total, product) => {
            return total + product.priceItem * product.quantityItem;
        }, 0);
    }

    const total = () => {
        return subTotal() + costShipping();
    }

    const productsQty = () => {
        let qtys = cartList.map(item => item.quantityItem).reduce((total, nextItem) => total + nextItem, 0);
        return qtys;
    }
    const finishBuy = (e) => {
        alert('Thank you for your purchase');
        clean();
       
    }

    console.log(productsQty(),'productsQty');
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clean,
            removeItem,
            isInCart,
            totalPerItem,
            addProductOnCart,
            substractProductOnCart,
            costShipping,
            subTotal,
            total,
            productsQty,
            finishBuy
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;