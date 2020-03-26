import React,{ useState, CSSProperties } from 'react'
import { Product } from '../items/itemList'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

interface Props{
    itemData: Product | undefined
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
        <div>

            <CardActions>
                <IconButton 
                    size="medium"
                    onClick={addNumOfProducts}
                >
                    <AddCircleOutline fontSize="large"/>
                </IconButton>
                <Typography variant="h5" color="textSecondary" component="h2">
                    {numOfProducts + " st"}
                </Typography>
                <IconButton 
                    size="medium"
                    onClick={subNumOfProducts}
                >
                    <RemoveCircleOutlineIcon fontSize="large"/>
                </IconButton>
            </CardActions>
            <CardActions>
                <Button 
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    onClick={addToOrder}
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