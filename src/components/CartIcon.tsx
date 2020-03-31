import React,{ CSSProperties } from 'react'
import { CartContext } from '../contexts/cartContext'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


export class CartIcon extends React.Component {

    render(){
        return(
            <CartContext.Consumer>
                { (cartState) =>(
                    <div>
                        <IconButton color="secondary" 
                            style={{border:'solid #9cba98 0.1em'}}>
                            <ShoppingCartIcon fontSize="large" color="error"/>
                        </IconButton>
                        <Typography style={numberOfOrders}>
                            {cartState.cartList.length > 99? "..." : cartState.cartList.length}
                        </Typography>
                    </div>
                )}
            </CartContext.Consumer>
        )
    }
}

const numberOfOrders:CSSProperties = {
    border: '0.1em solid #9cba98',
    height: '1.5em',
    width: '1.5em',
    borderRadius: '2em',
    textAlign: 'center',
    color: '#9cba98',
    position: 'relative',
    backgroundColor: '#346933',
    top:'-1.5em',
}