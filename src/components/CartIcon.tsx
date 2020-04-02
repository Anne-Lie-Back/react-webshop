import React,{ CSSProperties } from 'react'
import { CartContext } from '../contexts/cartContext'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartItem } from '../typings'


export class CartIcon extends React.Component {

    TotalProductCount(cartList: Array<CartItem>){
        let totalCount = 0
        for (const item of cartList) {
            totalCount += item.nrItems
        }

        return totalCount
    }

    render(){
        return(
            <CartContext.Consumer>
                { (cartState) =>(
                    <div style = {{marginRight: '1rem'}}>
                        <IconButton 
                            color="secondary" 
                            style={{border:'solid #9cba98 0.1em'}}
                            disabled = {true}>
                            <ShoppingCartIcon fontSize="large" color="secondary"/>
                        </IconButton>
                        <Typography style={numberOfOrders}>
                            {cartState.cartList.length > 99? "..." : this.TotalProductCount(cartState.cartList)}
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