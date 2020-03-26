import React from 'react'
import { CartContext } from '../contexts/cartContext'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import { Button } from '@material-ui/core'

export class CartIcon extends React.Component {
    render(){
        return(
            <CartContext.Consumer>
                { (cartState) =>(
                    <div>
                        <ShoppingCartOutlined />{cartState.cartList.length}
                        <Button onClick={cartState.addProduct}>Add</Button>
                    </div>
                )}
            </CartContext.Consumer>
        )
    }
}