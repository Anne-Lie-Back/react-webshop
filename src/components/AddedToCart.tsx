import React, {CSSProperties} from 'react'
import ShoppingCart from './ShoppingCart'
import { Link as RouterLink} from 'react-router-dom';
import { Button } from '@material-ui/core'

interface Props{
    handleClosing: () => void
}

export default function AddedToCart(props:Props){
    return(
        <div style = {clickAwayDiv} onClick = {props.handleClosing}>
            <div style = {shoppingCartContainer}>
                <ShoppingCart/>
                <Button
                    component={RouterLink} to ='/checkout'
                    onClick = {props.handleClosing}
                    variant="contained" 
                    color="primary"
                    style={{margin:'1rem'}}                                
                    >
                    Ta mig till Kassan
                </Button>
            </div>
        </div>
    )
}

const relativeContainer:CSSProperties = {
    display:'flex',
    position:'relative'
}

const shoppingCartContainer:CSSProperties = {
    width: '18.5rem',
/*     position:'absolute',
    right: '0',
    top: '6rem', */
    zIndex: 3,
    backgroundColor:'white',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    //border:'1px solid black'
    boxShadow: '0 0 0.3rem black',

}

const clickAwayDiv:CSSProperties = {
   width: '100vw',
   height: '100vh',
   position: 'fixed',
   zIndex: 1,
   top:0,
   right:0,
   display:'flex',
   alignItems:'center',
   justifyContent:'center'
}