import React,{ CSSProperties } from 'react'
import { Product } from '../items/itemList'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


interface Props{
    itemData: Product | undefined
}

export default function PurchasingArea( props: Props ){

    return(
        <div>
            <CardActions>
                <Button 
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                Köp
                <ShoppingCartIcon
                    style={ShoppingCartIconStyle}/>
                </Button>
            </CardActions>
        </div>
    )
}

const ShoppingCartIconStyle:CSSProperties={
    fontSize: 15,
    margin: '0 0 0 0.5em' 
}