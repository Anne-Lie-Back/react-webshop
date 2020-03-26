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
    mobNr:any,

    shippingMethod:string,
    shippingCost:any,
    deliveryDate:any
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

            shippingMethod: '',
            shippingCost: '',
            deliveryDate:'',
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

      handleShippingRadio = (event: { target: { value: any; }; }) => {
          this.setState({shippingMethod:event.target.value})
          console.log(this.state.shippingMethod)
          this.setShipmentDetails()
        }

    setShipmentDetails = () =>{
        if(this.state.shippingMethod === 'PostNord Express'){
            this.setState({deliveryDate:'24h från nu'})
            this.setState({shippingCost: 99})
            }
        else if(this.state.shippingMethod === 'PostNord Basic'){
            this.setState({deliveryDate:'4dagar'})
            this.setState({shippingCost: 39})
        }
        else{
            this.setState({deliveryDate:'ha ha ha...'})
            this.setState({shippingCost: 0})
        }
    }

      
    

    render(){
        let total = 500 + this.state.shippingCost
        const { step } = this.state
        switch(step){
            case 1:
                return(
                    <>
                        <h2>Här är listan på allt du vill köpa! (eller kommer vara)</h2>
                        <Address 
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
                        <Shipping
                            shippingMethod = {this.state.shippingMethod}
                            onRadioChange = {this.handleShippingRadio}
/*                              shippingCost = {this.state.shippingCost}
                            deliveryDate = {this.state.deliveryDate}  */
                            />
                                <br/>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick = {this.nextStep}> Fortsätt 
                        </Button>
                    </>
                )
            case 2:
                return(
                    <div style = {temporaryStyling}>
                        <p>Skickas till:</p>
                        <p>{this.state.firstName} {this.state.lastName}</p>
                        <p>{this.state.address}</p>
                        <p>{this.state.zipCode} {this.state.city}</p>
                        <br/>
                        <p>E-Mail: {this.state.eMail}</p>
                        <p>Mobilnummer: {this.state.mobNr}</p>

                        <br/>

                        <p>Valt Fraktsätt: {this.state.shippingMethod} </p>
                        <p>Förväntad fraktdag: {this.state.deliveryDate} </p>
                        <p> Kostnad: 500kr plus frakt (+{this.state.shippingCost}kr)</p>
                        <p>Totalkostnad: {total}</p>

                        <b/>
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