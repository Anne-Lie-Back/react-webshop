import React,{ CSSProperties } from 'react'
import { Product } from '../items/itemList'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartContext } from '../../contexts/cartContext'


interface Props{
    itemData: Product
}

export default function PurchasingArea( props: Props ){

    return(
        <CartContext.Consumer>
            {(cartState => (
            <div>
                <CardActions>
                    <Button 
                        size="large"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => cartState.addProduct(props.itemData?.id, 1)}
                    >
                    Köp
                    <ShoppingCartIcon
                        style={ShoppingCartIconStyle}/>
                    </Button>
                </CardActions>
            </div>
            ))}
        </CartContext.Consumer>


    )
}

const ShoppingCartIconStyle:CSSProperties={
    fontSize: 15,
    margin: '0 0 0 0.5em' 
}