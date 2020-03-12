import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice=cart.reduce((total,prd)=>total+prd.price,0)
    let shipping=0;
    if(totalPrice>49)
        shipping=0;
    else if(totalPrice>29)
        shipping=4.99;
    else if(totalPrice>0){
        shipping=12.99;
    }
    const formatNumber=num=>{
       const precission=num.toFixed(2);
       return Number(precission) 
    }
    const tax=(totalPrice/10);
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {formatNumber(totalPrice)}</p>
            <p>Shipping Price : {formatNumber(shipping)}</p>
            <p>Vat + Tax : {formatNumber(tax)}</p>
            <p>Total Price : {formatNumber(totalPrice+shipping+tax)}</p>
            <button> Review Order</button>
        </div>
    );
};

export default Cart;