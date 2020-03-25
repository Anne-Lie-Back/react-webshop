import React,{ useState } from 'react'
import { Product } from '../items/itemList'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


interface Props{
    itemData: Product
}

export default function PurchasingArea( props: Props ){
    const [numOfProducts, setNumOfProducts] = useState(1)


    function addNumOfProducts(){
        setNumOfProducts(prevCount => prevCount + 1)
    }

    function subNumOfProducts(){
        setNumOfProducts(prevCount => prevCount - 1)
    }

    function addToOrder(){

    }

    return(
        <CardActions>
            <Button 
                size="large"
                variant="outlined"
                color="secondary"
                onClick={addNumOfProducts}
            >+</Button>
            <Typography variant="h5" color="textSecondary" component="h2">
                {numOfProducts}
            </Typography>
            <Button 
                size="large"
                variant="outlined"
                color="secondary"
                onClick={subNumOfProducts}
            >-</Button>
            <Button 
                size="large"
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={addToOrder}
            >
            Köp
            <ShoppingCartIcon
                style={{ 
                    fontSize: 15,
                    margin: '0 0 0 0.5em' 
                }}/>
            </Button>
        </CardActions>
    )
}