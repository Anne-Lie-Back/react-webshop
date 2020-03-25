import React from 'react'
import Address from './Address'

interface Props{
}
interface State{
    step:number,
    name:string,
    address: string,
    zipCode: number,
    city: string
}

export default class CheckOut extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            step: 1,
            name: '',
            address: '',
            zipCode: 0,
            city: ''
        }   
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        })
      }

      previousStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        })
      }

      handleNameInput = (event: { target: { value: any } }) => this.setState({name:event.target.value})
      handleAddressInput = (event: { target: { value: any } }) => this.setState({address:event.target.value})
      handleZipCodeInput = (event: { target: { value: any } }) => this.setState({zipCode:event.target.value})
      handleCityInput = (event: { target: { value: any } }) => this.setState({city:event.target.value})
       
    

    render(){
        const { step } = this.state
        console.log(this.state.name)
        switch(step){
            case 1:
                return(
                    <Address 
                        nextStep = {this.nextStep}
                        name = {this.state.name}
                        onChangeName = {this.handleNameInput}
                        address = {this.state.address}
                        onChangeAddress = {this.handleAddressInput}
                        zipCode = {this.state.zipCode}
                        onChangeZipCode = {this.handleZipCodeInput}
                        city = {this.state.city}
                        onChangeCity = {this.handleCityInput}
                        
                    />
                )
            case 2:
                return(
                    <>
                        <h2>{this.state.name}</h2>
                        <p>{this.state.address}</p>
                        <p>{this.state.zipCode}{this.state.city}</p>
                    </>
                )
        }
    }
}