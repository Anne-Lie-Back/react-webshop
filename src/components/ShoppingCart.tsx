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
                                <ListItem style={widthStyle}>
                                    <ListItemAvatar>
                                        <Avatar src={cartItem.product.imgURL}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography noWrap>{cartItem.product.name}</Typography> } />
                                    <ListItemSecondaryAction >
                                    <IconButton size="small" onClick={() => cartState.addProduct(cartItem.id, -1)}>
                                        <RemoveIcon fontSize="small"/>
                                    </IconButton>
                                    <ListItemText primary={<Typography align="right">{cartItem.nrItems}</Typography> } />
                                    <IconButton size="small" onClick={() => cartState.addProduct(cartItem.id, 1)}>
                                        <AddIcon fontSize="small"/>
                                    </IconButton>
                                    <ListItemText primary={
                                        <Typography align="center">
                                            {cartItem.product.price + " kr"}
                                        </Typography> 
                                        } />
                                    <IconButton size="small" edge="end" aria-label="delete" onClick={() => cartState.removeItemFromCart(cartItem.id)}>
                                        <DeleteRoundedIcon fontSize="small"/>
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

}