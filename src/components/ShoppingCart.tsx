import React from 'react'
import { CartContext } from '../contexts/cartContext';
import { List, ListItem, ListItemText, IconButton, ListItemAvatar, Avatar, Divider, Container, ListItemSecondaryAction, Typography } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function ShoppingCart() {

    return (
        <CartContext.Consumer>
            {(cartState) => (
                <div >
                    <List>
                    {cartState.cartList?.length > 0 ? 
                        cartState.cartList.map(cartItem =>
                            <Container key={cartItem.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={cartItem.product.imgURL}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={cartItem.product.name} />
                                    <ListItemSecondaryAction style={widthStyle}>
                                    <IconButton onClick={() => cartState.addProduct(cartItem.id, -1)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                    <ListItemText primary={cartItem.nrItems + " st"} />
                                    <IconButton onClick={() => cartState.addProduct(cartItem.id, 1)}>
                                        <AddIcon/>
                                    </IconButton>
                                    <ListItemText primary={
                                        <Typography align="center">
                                            {cartItem.product.price + " kr"}
                                        </Typography> 
                                        } />
                                    <IconButton edge="end" aria-label="delete" onClick={() => cartState.removeItemFromCart(cartItem.id)}>
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