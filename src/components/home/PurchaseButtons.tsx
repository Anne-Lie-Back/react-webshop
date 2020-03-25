import React, {CSSProperties} from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

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
}

export default function PurchaseButtons(props : Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
        variant="contained"
        color="primary"
        fullWidth={true}
        style={centerButton}
      >
        {props.itemPrice + " kr"}
        <ShoppingCartIcon style={{ fontSize: 15, margin: '0 0 0 0.5em' }}/>
      </Button>
    </div>
  );
}

const centerButton: CSSProperties = {
  margin:'auto',
}