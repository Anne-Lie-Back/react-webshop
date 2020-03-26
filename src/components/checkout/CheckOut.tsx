import React, {CSSProperties} from 'react'
import Address from './Address'
import Shipping from './Shipping'
import Button from '@material-ui/core/Button';

interface Props{
}
interface State{
    step:number,
    firstName:string,
    lastName:string,
    address: string,
    zipCode: any,
    city: string
    eMail: string,
    mobNr:any
}

export default class CheckOut extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            address: '',
            zipCode: '',
            city: '',
            eMail:'',
            mobNr: '',
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

      handleFirstNameInput = (event: { target: { value: any } }) => this.setState({firstName:event.target.value})
      handleLastNameInput = (event: { target: { value: any } }) => this.setState({lastName:event.target.value})
      handleAddressInput = (event: { target: { value: any } }) => this.setState({address:event.target.value})
      handleZipCodeInput = (event: { target: { value: any } }) => this.setState({zipCode:event.target.value})
      handleCityInput = (event: { target: { value: any } }) => this.setState({city:event.target.value})
      handleEMailInput = (event: { target: { value: any } }) => this.setState({eMail:event.target.value})
      handleMobNrInput = (event: { target: { value: any } }) => this.setState({mobNr:event.target.value})
       
    

    render(){
        const { step } = this.state
        switch(step){
            case 1:
                return(
                    <>
                    <h2>Här är listan på allt du vill köpa! (eller kommer vara)</h2>
                    <Address 
                        nextStep = {this.nextStep}
                        firstName = {this.state.firstName}
                        onChangeFirstName = {this.handleFirstNameInput}
                        lastName = {this.state.lastName}
                        onChangeLastName = {this.handleLastNameInput}
                        address = {this.state.address}
                        onChangeAddress = {this.handleAddressInput}
                        zipCode = {this.state.zipCode}
                        onChangeZipCode = {this.handleZipCodeInput}
                        city = {this.state.city}
                        onChangeCity = {this.handleCityInput}   
                        eMail = {this.state.eMail}
                        onChangeEMail = {this.handleEMailInput}
                        mobNr = {this.state.mobNr}
                        onChangeMobNr = {this.handleMobNrInput}        
                    />
                    <Shipping/>
                    </>
                )
            case 2:
                return(
                    <div style = {temporaryStyling}>
                        <p>{this.state.firstName} {this.state.lastName}</p>
                        <p>{this.state.address}</p>
                        <p>{this.state.zipCode} {this.state.city}</p>
                        <br/>
                        <p>E-Mail: {this.state.eMail}</p>
                        <p>Mobilnummer: {this.state.mobNr}</p>

                        <br/>
                        <h5>Funktionen att det stämmer finns inte än</h5>
                        <Button variant="contained" 
                            color="primary"
                            onClick = {this.previousStep}> Stämmer inte?
                        </Button>

                    </div>
                )
        }
    }
}

const temporaryStyling:CSSProperties ={
    border: '2px solid blue',
    margin: '3rem',
    padding: '2rem'
}