import React from 'react'
import { CartContext } from '../contexts/cartContext'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import { Button } from '@material-ui/core'

export class CartIcon extends React.Component {
    render(){
        return(
            <CartContext.Consumer>
                { (props) =>(
                    <div>
                        <ShoppingCartOutlined />{props.cartList.length}
                        <Button onClick={props.addProduct}>Add</Button>
                    </div>
                )}
            </CartContext.Consumer>
        )
    }
}