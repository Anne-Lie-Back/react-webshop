import React from 'react'
import { CartContext } from '../contexts/cartContext';
import { List, ListItem, ListItemText, IconButton, ListItemAvatar, Avatar, Divider, Container, ListItemSecondaryAction, Typography, Hidden } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { Link } from 'react-router-dom';

export default function ShoppingCart() {

    return (
        <CartContext.Consumer>
            {(cartState) => (
                <div >
                    <List>
                    {cartState.cartList?.length > 0 ? 
                        cartState.cartList.map(cartItem =>
                            <div key={cartItem.id}>
                                <ListItem >
                                    <Hidden only="xs">
                                    <ListItemAvatar>
                                        <Avatar src={cartItem.product.imgURL}/>
                                    </ListItemAvatar>
                                    </Hidden>
                                    <ListItemText primary={<Typography noWrap><Link to={"product/"+ cartItem.id}>{cartItem.product.name}</Link></Typography> } />
                                    <div style={nextFlex}>
                                    <IconButton size="small" onClick={() => cartState.addProduct(cartItem.id, -1)}>
                                        <RemoveIcon fontSize="small"/>
                                    </IconButton>
                                    <ListItemText primary={<Typography noWrap >{cartItem.nrItems}</Typography> } />
                                    <IconButton size="small" onClick={() => cartState.addProduct(cartItem.id, 1)}>
                                        <AddIcon fontSize="small"/>
                                    </IconButton>
                                    </div>
                                    <div style={flexStyle}>
                                    <ListItemText primary={
                                        <Typography noWrap align="center">
                                            {cartItem.product.price + " kr"}
                                        </Typography> 
                                        } />
                                    <IconButton size="small" edge="end" aria-label="delete" onClick={() => cartState.removeItemFromCart(cartItem.id)}>
                                        <DeleteRoundedIcon fontSize="small"/>
                                    </IconButton>
                                    </div>
                                </ListItem>
                            <Divider/>
                            </div>
                        )
                        : undefined
                    }
                    <ListItem>
                    <ListItemText primary={
                        <Typography noWrap align="right">
                            {"Total: " + cartState.cartTotalPrice}
                        </Typography> 
                        } />
                    </ListItem>
                    </List>
                </div>
            )}
        </CartContext.Consumer>
    );
}

const widthStyle: React.CSSProperties = {
    // maxWidth: "2rem",
    // textAlign: "right"
    display: "block"
    // flexDirection: "row",

}

const flexStyle: React.CSSProperties = {
    // display: "flex",
    // flexDirection: "row"
    display: "flex",
    flexDirection: "row",
    alignItems: "right"
}

const nextFlex: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
}