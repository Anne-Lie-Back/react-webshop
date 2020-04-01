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
    arrayIndex: number
}

interface State{
    id: number,
    name: string, 
    price: number,
    imgURL: string,
    description: string
}

export default class EditItem extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            id: props.itemData.id,
            name: props.itemData.name, 
            price: props.itemData.price,
            imgURL: props.itemData.imgURL,
            description: props.itemData.description
        }   
    }

    handleIdInput = (event: { target: { value: any } }) => this.setState({id:event.target.value})
    handleNameInput = (event: { target: { value: any } }) => this.setState({name:event.target.value})
    handlePriceInput = (event: { target: { value: any } }) => this.setState({price:event.target.value})
    handleimgURLChange = (event: { target: { value: any } }) => this.setState({imgURL:event.target.value})
    handleDescriptionInput = (event: { target: { value: any } }) => this.setState({description:event.target.value})
    handleSubmit = (event: any) => {
        const productList = JSON.parse(localStorage.getItem('productList') || '{}')
        productList[this.props.arrayIndex] = {
            id: this.state.id,
            name: this.state.name, 
            price: this.state.price,
            imgURL: this.state.imgURL,
            description: this.state.description
        }
        localStorage.setItem('productList', JSON.stringify(productList))
    }

    delete = () => {
        const items = JSON.parse(localStorage.getItem('productList') || '{}')
        const i = this.props.arrayIndex
        const productList = items.slice(0, i).concat(items.slice(i + 1, items.length))
        localStorage.setItem('productList', JSON.stringify(productList))
    }
    

    render(){
        return(
            <Container>
                <Button variant="contained" color="primary" fullWidth onClick={this.delete}>
                    <RemoveCircleOutlineIcon/>Ta bort #{this.props.itemData.id}
                </Button>
                <div style={divSpace}/>
                <FormControl fullWidth>
                    <form autoComplete="off">
                        <TextField required fullWidth name="name" label="Namn" variant="outlined" value={this.state.name} onChange={this.handleNameInput}/>
                        <div style={divSpace}/>
                        <TextField required fullWidth name="price" label="Pris" variant="outlined" value={this.state.price} onChange={this.handlePriceInput}/>
                        <div style={divSpace}/>
                        <TextField required fullWidth name="imgURL" label="ImgURL" variant="outlined" value={this.state.imgURL} onChange={this.handleimgURLChange} />
                        <div style={divSpace}/>
                        <TextField required fullWidth multiline rowsMax="4" name="description" label="Beskrivning" variant="outlined" value={this.state.description} onChange={this.handleDescriptionInput}/>
                        <div style={divSpace}/>
                    </form>
                </FormControl>
                <Button variant="outlined" color="primary" fullWidth onClick={this.handleSubmit}>
                    <EditIcon/> Ändra #{this.props.itemData.id}
                </Button>
            </Container>
        )
    }
}

const divSpace:CSSProperties = {
    margin:"0 0 1em 0"
}