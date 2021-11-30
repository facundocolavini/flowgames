import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

import {NotificationCart} from "./CartWidget.style";
const CartWidget = () => {
    const test = useContext(CartContext);
    return (
        (test.cartList.length > 0) ?
        <NotificationCart>
            {test.productsQty()}
        </NotificationCart>
        : ''
    )
}

export default CartWidget
