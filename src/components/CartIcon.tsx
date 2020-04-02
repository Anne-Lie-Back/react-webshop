import React,{ CSSProperties } from 'react'
import { CartContext } from '../contexts/cartContext'
import { IconButton, Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartItem } from '../typings'
import ShoppingCart from './ShoppingCart'
import { Link as RouterLink} from 'react-router-dom';

interface Props{}
interface State{
    isCartShown:boolean
}
export class CartIcon extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state ={
            isCartShown: false
        }
    }

    TotalProductCount(cartList: Array<CartItem>){
        let totalCount = 0
        for (const item of cartList) {
            totalCount += item.nrItems
        }

        return totalCount
    }

    handleOnClick = () =>{
        this.setState({isCartShown:!this.state.isCartShown})
    }

     displayCart(){
        if(this.state.isCartShown){
            return (
                <div style = {clickAwayDiv} onClick={this.handleOnClick}>
                    <div style={shoppingCartContainer}>
                        <ShoppingCart/>
                        
                            <Button
                                component={RouterLink} to ='/checkout'
                                onClick = {this.handleOnClick}
                                variant="contained" 
                                color="primary"
                                //disabled = {this.props.isDisabled}
                                >
                                Ta mig till Kassan
                            </Button>
                        
                    </div>
                </div>)
        }
    } 

    render(){
        return(
            <CartContext.Consumer>
                { (cartState) =>(
                    <div style={relativeContainer}>
                        <div style = {{marginRight: '1rem'}}>
                            <IconButton 
                                color="secondary" 
                                style={{border:'solid #9cba98 0.1em'}}
                                onClick = {this.handleOnClick}>
                                <ShoppingCartIcon fontSize="large" color="secondary"/>
                            </IconButton>
                            <Typography style={numberOfOrders}>
                                {cartState.cartList.length > 99? "..." : this.TotalProductCount(cartState.cartList)}
                            </Typography>
                        </div>
                        {this.displayCart()}
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

const relativeContainer:CSSProperties = {
    display:'flex',
    position:'relative'
}

const shoppingCartContainer:CSSProperties = {
    width: '25rem',
    position:'absolute',
    right: '0',
    top: '6rem',
    zIndex: 3,
    backgroundColor:'white'
}

const clickAwayDiv:CSSProperties = {
   width: '100%',
   height: '100%'
}