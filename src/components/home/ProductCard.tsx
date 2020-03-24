import React from 'react'
import { itemResponse } from '../items/itemList'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PurchaseButtons from './PurchaseButtons'

interface Props{
 itemData: itemResponse
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });
  
  export default function ProductCard(props : Props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.itemData.imgURL}
            title={props.itemData.imgURL + " Image"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.itemData.name}
            </Typography>
            <PurchaseButtons itemPrice={props.itemData.price}/>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }