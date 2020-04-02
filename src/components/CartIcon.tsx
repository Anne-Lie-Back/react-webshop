import React,{ useState, CSSProperties } from 'react'
import { CartContext } from '../contexts/cartContext'
import { IconButton, Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartItem } from '../typings'
import ShoppingCart from './ShoppingCart'
import { Link as RouterLink} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function CartIcon(){
/*     constructor(props:Props){
        super(props)
        this.state ={
            isCartShown: false
        }
    } */
    const [isCartShown, setToggled] = useState(false);
    const handleOnClick = () => setToggled(!isCartShown);

    function TotalProductCount(cartList: Array<CartItem>){
        let totalCount = 0
        for (const item of cartList) {
            totalCount += item.nrItems
        }

        return totalCount
    }

    let screenSize = useMediaQuery('(min-width:430px)')
    let divSize = {width: '18.5rem'}

    if(screenSize === true){
        divSize = {width: '25rem'}
    }


     function displayCart(){

        //IF CART BUTTON IS CLICKED THIS HAPPENS! NEED TO MAKE CLICK AWAYDIV STRETCH OVER THE WHOLE SCREEN
        if(isCartShown){
            return (
                <div style = {clickAwayDiv} onClick={handleOnClick}>
                    <div style={{...shoppingCartContainer, ...divSize}}>
                        <ShoppingCart/>                
                            <Button
                                component={RouterLink} to ='/checkout'
                                onClick = {handleOnClick}
                                variant="contained" 
                                color="primary"
                                style={{margin:'1rem'}}
                                >
                                Ta mig till Kassan
                            </Button>
                        
                    </div>
                </div>)
        }
    } 

        return(
            <CartContext.Consumer>
                { (cartState) =>(
                    <div style={relativeContainer}>
                        <div style = {{marginRight: '1rem'}}>
                            <IconButton 
                                color="secondary" 
                                style={{border:'solid #9cba98 0.1em'}}
                                onClick = {handleOnClick}>
                                <ShoppingCartIcon fontSize="large" color="secondary"/>
                            </IconButton>
                            <Typography style={numberOfOrders}>
                                {cartState.cartList.length > 99? "..." : TotalProductCount(cartState.cartList)}
                            </Typography>
                        </div>
                        {displayCart()}
                    </div>
                )}
            </CartContext.Consumer>
        )
    
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

const relativeContainer:CSSProperties = {
    display:'flex',
    position:'relative'
}

const shoppingCartContainer:CSSProperties = {
    //width: '25rem',
    position:'absolute',
    right: '0',
    top: '6rem',
    zIndex: 3,
    backgroundColor:'white',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    borderStyle:"solid",
    borderColor:"#346933 ",
    borderWidth: "0 0.1em 0.1em 0.1em"
}

const clickAwayDiv:CSSProperties = {
   width: '100vw',
   height: '100vh',
   position: 'absolute',
   zIndex: 1,
   top:0,
   right:0,
}