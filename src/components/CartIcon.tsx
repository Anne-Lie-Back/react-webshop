import React from 'react'
import { CartContext } from '../contexts/cartContext'
import { IconButton } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export class CartIcon extends React.Component {
    render(){
        return(
            <CartContext.Consumer>
                { (cartState) =>(
                    <div>
                        <IconButton color="secondary" 
                            style={{border:'solid #9cba98 0.2em'
                            }}>
                            {cartState.cartList?.length ? cartState.cartList?.length : ""}
                            <ShoppingCartIcon fontSize="large" color="error"/>
                        </IconButton>
                    </div>
                )}
            </CartContext.Consumer>
        )
    }
}