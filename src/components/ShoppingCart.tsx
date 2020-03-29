import React from 'react'
import { CartContext } from '../contexts/cartContext';

export default function ShoppingCart() {

    return (
        <CartContext.Consumer>
            {(cartState) => (
                <div >
                    <h3>ShoppingCart</h3>
                    <ul>
                    {cartState.cartList?.length > 0 ? 
                        cartState.cartList.map(item => 
                                <li key={item.id}>
                                    id: {item.id}
                                    <button onClick={() => cartState.addProduct(item.id, -1)}> -1 </button>
                                    nr: {item.nrItems}
                                    <button onClick={() => cartState.addProduct(item.id, 1)}> +1 </button>
                                    <button onClick={() => cartState.removeItemFromCart(item.id)}>Remove</button>
                                </li>
                        )
                        : undefined
                    }
                    </ul>
                </div>
            )}
        </CartContext.Consumer>
    );
}