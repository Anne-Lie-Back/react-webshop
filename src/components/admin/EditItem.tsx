import React, { CSSProperties } from 'react'
import { Product } from '../items/itemList'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import EditIcon from '@material-ui/icons/Edit';

interface Props{
    itemData: Product
}

export default function EditItem(props:Props) {

    return(
        <Container>
            <Button variant="contained" color="primary" fullWidth>
                <RemoveCircleOutlineIcon/>Ta bort #{props.itemData.id}
            </Button>
            <div style={space}/>
            <FormControl fullWidth>
                <form autoComplete="off">
                    <TextField required fullWidth label="Namn" variant="outlined" defaultValue={props.itemData.name}/>
                    <div style={space}/>
                    <TextField required fullWidth label="Pris" variant="outlined" defaultValue={props.itemData.price}/>
                    <div style={space}/>
                    <TextField required fullWidth label="ImgURL" variant="outlined" defaultValue={props.itemData.imgURL}/>
                    <div style={space}/>
                    <TextField required fullWidth multiline rowsMax="4" label="Beskrivning" variant="outlined" defaultValue={props.itemData.description}/>
                    <div style={space}/>
                </form>
            </FormControl>
            <Button variant="outlined" color="primary" fullWidth>
                <EditIcon/> Ändra #{props.itemData.id}
            </Button>
        </Container>
    )
}

const space:CSSProperties = {
    margin:"0 0 1em 0"
}