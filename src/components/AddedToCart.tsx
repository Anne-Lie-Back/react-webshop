import React, {CSSProperties} from 'react'
import ShoppingCart from './ShoppingCart'
import { Link as RouterLink} from 'react-router-dom';
import { Button } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props{
    handleClosing: () => void
}

export default function AddedToCart(props:Props){
    let screenSize = useMediaQuery('(min-width:430px)')
    let divSize = {width: '18.5rem'}
    let positionTop = {top: '0.7rem'}
    let positionRight = {right: '6%'}
  

    if(screenSize === true){
        divSize = {width: '25rem'}
        positionTop = {top: '0.7rem'}
        positionRight = {right: '0.7rem'}
    }

    return(
        <div style = {clickAwayDiv} onClick = {props.handleClosing}>
            <div style = {{...shoppingCartContainer, ...divSize, ...positionTop, ...positionRight}}>
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
   // width: '18.5rem',
    position:'absolute',
    //right: '0.7rem',
    zIndex: 3,
    backgroundColor:'white',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    //border:'1px solid black'
    boxShadow: '0 0 0.3rem black',
    maxHeight:'70%',
    overflowX:'auto',
/*     WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: 'black' */

}

const clickAwayDiv:CSSProperties = {
   width: '110vw',
   height: '110vh',
   position: 'fixed',
   zIndex: 1,
   top:'-1rem',
   right:'-1rem',
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor: '#00000090'
}