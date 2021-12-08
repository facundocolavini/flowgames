import React, { useContext } from 'react';
import { CartContext} from '../Contexts/CartContext';
import {ContainerCart,TitleCart,Btns,BtnShop,BtnClearCart,ContentCart,ListProductsContainer,SummaryContainer,Product,ProductDetails,ImageProduct,ProductDetail,DetailsRowTop,WrapperTexts,TextDescription,TextValue,WrapperTotal,DetailsRowBot,BtnDelete,ProductQuantity,BtnAddProduct,BtnSubstractProduct,InputQ,WrapperSummary,SummarySubTotalFlex,TextSummaryBold,TextSummaryValue,SummaryShippingFlex,WrapperSummaryTotal,TextSummaryBoldTotal,TextSummaryValueTotal,BtnFinishBuy} from './Cart.style';
/* import game from '../../assets/images/game.png'; */
import {AddItem,UpdateStock} from '../../utils/firestoreFetch';



const Cart = () => {
    const test = useContext(CartContext);
    const createOrder = ()=>{
        let order = {
            buyer:{
                //Elementos del form 
                name: 'Diego',
                email: 'dpa@hotmail.com',
                phone: '12356678'
            },
            items: test.cartList.map(element =>({
                id:element.idItem,
                title:element.nameItem,
                qty:element.quantityItem,
                shipping:element.shippingItem,
                price:element.priceItem
            })),
            date:new Date(),
            total: test.total()
        }; 
        AddItem(order)
            .then(result => alert(result.id))
            .catch(err => console.log(err));
        
        test.cartList.forEach(async(item)=>{
            if(item.quantityItem === 0 && item.quantityItem <0){
                UpdateStock(item.idItem,"stock",item.quantityItem)
            }else{         UpdateStock(item.idItem,"stock",0)}
        })
        
        test.clean();
    }
    return (
        <ContainerCart>
            <TitleCart>My Cart</TitleCart>
            <Btns>
                <BtnShop to="/">SHOP</BtnShop>
                {
                    test.cartList.length > 0
                        ? <BtnClearCart onClick={test.clean}>CLEAR ALL</BtnClearCart>
                        : <h2>Your Cart is Empty</h2>
                }
            </Btns>
            <ContentCart>
                <ListProductsContainer>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(product=>
                            <Product key={product.idItem}>
                                <ProductDetails>
                                    <ImageProduct src={product.imageItem}/>
                                    <ProductDetail>
                                        <DetailsRowTop>
                                            <WrapperTexts> 
                                                <TextDescription>
                                                    Product: <TextValue>{product.nameItem}</TextValue>
                                                </TextDescription>
                                                <TextDescription>
                                                    Price: <TextValue>${product.priceItem}</TextValue>
                                                </TextDescription>
                                                <TextDescription>
                                                    Quantity: <TextValue>{product.quantityItem}</TextValue>
                                                </TextDescription>
                                            </WrapperTexts>
                                            <WrapperTotal>
                                                <BtnDelete onClick={() => test.removeItem(product.idItem)}>X</BtnDelete>
                                                <TextDescription>
                                                    Total:<TextValue>$ {test.totalPerItem(product.idItem)}</TextValue>
                                                </TextDescription>
                                            </WrapperTotal>                                    
                                        </DetailsRowTop>
                                        <DetailsRowBot>
                                            <ProductQuantity>
                                                <BtnAddProduct onClick={()=> test.addProductOnCart(product.quantityItem,product.idItem)}>+</BtnAddProduct>
                                                <InputQ>{product.quantityItem}</InputQ>
                                                <BtnSubstractProduct onClick={()=> test.substractProductOnCart(product.quantityItem,product.idItem)}>-</BtnSubstractProduct>
                                            </ProductQuantity>
{/*                                             <TextDescription>
                                                Stock:<TextValue>{product.stockItem}</TextValue>
                                            </TextDescription> */}
                                          
                                        </DetailsRowBot>
                                    </ProductDetail>
                                </ProductDetails>
                            </Product>
                        )
                    }
                </ListProductsContainer>
                <SummaryContainer>
                    <TitleCart>My Order</TitleCart>                   
                    <WrapperSummary>
                        <SummarySubTotalFlex>
                            <TextSummaryBold>SubTotal:</TextSummaryBold>
                            {
                                (test.cartList.length > 0)
                                    ?<TextSummaryValue>${test.subTotal()}</TextSummaryValue>
                                    :<TextSummaryValue>$0</TextSummaryValue>
                            }
                        </SummarySubTotalFlex>
                        {
                        (test.cartList.length > 0) ?
                            <SummaryShippingFlex>
                                <TextSummaryBold>Shipping:</TextSummaryBold>
                                <TextSummaryValue>${test.costShipping()}</TextSummaryValue>  
                            </SummaryShippingFlex>
                            :<SummaryShippingFlex>
                                <TextSummaryBold>Shipping:</TextSummaryBold>
                                <TextSummaryValue>$0</TextSummaryValue>  
                            </SummaryShippingFlex>
                        }
                    </WrapperSummary>
                    <WrapperSummaryTotal>   
                        <TextSummaryBoldTotal>Total:</TextSummaryBoldTotal>
                        {
                            (test.cartList.length > 0)&&
                            <TextSummaryValueTotal>${test.total()}</TextSummaryValueTotal>
                        }  
                    </WrapperSummaryTotal>
                    {
                        (test.cartList.length > 0)&&
                        <BtnFinishBuy onClick={createOrder}>FINISH BUY</BtnFinishBuy>
                    }
                </SummaryContainer>
            </ContentCart>
        </ContainerCart>
    )
}

export default Cart;
