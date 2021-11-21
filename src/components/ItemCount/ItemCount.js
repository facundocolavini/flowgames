import React, {useState } from 'react'
import {OutStock,Stock,InputQuantity,BtnBuy,BtnAdd,BtnSubstract,FlexQuantity,ContainerCountItems} from '../ItemCount/ItemCount.style';
const ItemCount = ({stock ,initial,onAdd}) => {
    const [count, setCount] = useState(0);
    const [onStock, setOnStock] = useState(stock);
    const [outStock, setOutStock] = useState(false);


    const increment = () => {
        console.log(stock,'STOCK')
        if (count < stock) {
            setCount(count + 1);
            setOnStock(onStock-1);
        }else{
            setOutStock(true);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
            setOnStock(onStock+1);
            setOutStock(false);
        }

    }
    return (
        <>
            <ContainerCountItems>
                <FlexQuantity>
                    {
                        outStock
                        ? <OutStock>NO STOCK</OutStock>
                        :<BtnBuy onClick={() => onAdd(count)}>GET NOW</BtnBuy>
                    }
                        <BtnAdd onClick={increment}>+</BtnAdd>
                        <InputQuantity>{count}</InputQuantity>
                        <BtnSubstract onClick={decrement}>-</BtnSubstract>
                </FlexQuantity>
            </ContainerCountItems>
                <Stock>Stock:{onStock}</Stock>

        </>
    )
}

export default ItemCount
