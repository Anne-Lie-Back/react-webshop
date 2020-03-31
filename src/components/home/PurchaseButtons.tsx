import React, {CSSProperties} from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartContext } from '../../contexts/cartContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

interface Props {
  itemPrice: number
  itemId: number
}

export default function PurchaseButtons(props : Props) {
  const classes = useStyles();

  return (
    <CartContext.Consumer>
      { (cartState) => (
        <div className={classes.root} style={{padding:'0 1em 1em'}}>
          <Button onClick={() => cartState.addProduct(props.itemId, 1)}
            variant="contained"
            color="primary"
            fullWidth={true}
            style={centerButton}
          >
            {props.itemPrice + " kr"}
            <ShoppingCartIcon style={ShoppingCartIconStyle}/>
          </Button>
        </div>
      )}
    </CartContext.Consumer>
  );
}

const centerButton: CSSProperties = {
  margin:'auto',
}

const ShoppingCartIconStyle:CSSProperties={
  fontSize: 15,
  margin: '0 0 0 0.5em' 
}