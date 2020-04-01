import React from 'react'
import { CartContext } from '../contexts/cartContext';
import { List, ListItem, ListItemText, IconButton, ListItemAvatar, Avatar, Divider, Container, ListItemSecondaryAction, Typography } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { Product } from './items/itemList'
import { itemsLS } from './ItemListLS'

export default function ShoppingCart() {

    function getProductById(inItemId: number){
        const errorProduct: Product = {name:"error", id:0 , price:0, description:"error",imgURL:""}
        const product = itemsLS.find(({ id }) => id === inItemId)
        if(product){
            return product
        } else {
            console.log("cant find product")
            return errorProduct
        }
    }

    return (
        <CartContext.Consumer>
            {(cartState) => (
                <div >
                    <List>
                    {cartState.cartList?.length > 0 ? 
                        cartState.cartList.map(contextItem =>
                            <Container key={contextItem.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={getProductById(contextItem.id).imgURL}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={(getProductById(contextItem.id).name)} />
                                    <ListItemSecondaryAction style={widthStyle}>
                                    <IconButton onClick={() => cartState.addProduct(contextItem.id, -1)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                    <ListItemText primary={contextItem.nrItems + " st"} />
                                    <IconButton onClick={() => cartState.addProduct(contextItem.id, 1)}>
                                        <AddIcon/>
                                    </IconButton>
                                    <ListItemText primary={
                                        <Typography align="center">
                                            {getProductById(contextItem.id).price + " kr"}
                                        </Typography> 
                                        } />
                                    <IconButton edge="end" aria-label="delete" onClick={() => cartState.removeItemFromCart(contextItem.id)}>
                                        <DeleteRoundedIcon />
                                    </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            <Divider/>
                            </Container>
                        )
                        : undefined
                    }
                    </List>
                </div>
            )}
        </CartContext.Consumer>
    );
}

const widthStyle: React.CSSProperties = {
    // maxWidth: "2rem",
    // textAlign: "right"
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
}