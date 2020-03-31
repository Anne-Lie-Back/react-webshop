import React, { CSSProperties } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
/*import { Product } from '../items/itemList'*/
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'



interface Props{
}

interface State{
    id: number,
    name: string, 
    price: number,
    imgURL: string,
    description: string
}

export default class NewItem extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            id: 0 ,
            name: "" , 
            price: 0 ,
            imgURL: "" ,
            description: ""
        }   
    }
    handleNameInput = (event: { target: { value: any } }) => this.setState({name:event.target.value})
    handlePriceInput = (event: { target: { value: any } }) => this.setState({price:event.target.value})
    handleimgURLChange = (event: { target: { value: any } }) => this.setState({imgURL:event.target.value})
    handleDescriptionInput = (event: { target: { value: any } }) => this.setState({description:event.target.value})
    
    handleSubmit = (event: any) => {
        const productList = JSON.parse(localStorage.getItem('productList') || '{}')
        let allIDs = []
        let highestID
        for (let i = 0; i < productList.length; i++) {
            allIDs.push(productList[i].id)
        }
        highestID = Math.max(...allIDs) + 1
        productList.push({
            id: highestID,
            name: this.state.name, 
            price: this.state.price,
            imgURL: this.state.imgURL,
            description: this.state.description
        })
        localStorage.setItem('productList', JSON.stringify(productList))
    }

    render(){
        return(
            <div>
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
                    <AddCircleOutlineOutlinedIcon/> Lägg till
                </Button>
            </div>
        )
    }
}


const divSpace:CSSProperties = {
    margin:"0 0 1em 0"
}
