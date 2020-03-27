import React, {CSSProperties} from 'react'
import AddressForm from './Address'
import Shipping from './Shipping'
import Button from '@material-ui/core/Button';
import { customerInfo } from './../../typings'

interface Props{
}


interface State{
    step:number,

    customerInfo?: customerInfo

    shippingMethod:string,
    shippingCost:any,
    deliveryDate:any
}

export default class CheckOut extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            step: 1,
           
            customerInfo: undefined

            shippingMethod: 'PostNord Express',
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

      handleShippingRadio = (event: { target: { value: any } }) => { 
        this.setShipmentDetails(event.target.value)
        }

    setShipmentDetails = (shipping:string) =>{
        
        if(shipping === 'PostNord Express'){
            this.setState({deliveryDate:'24h från nu'})
            this.setState({shippingCost: 99})
            this.setState({shippingMethod: shipping})
            }
        else if(shipping === 'PostNord Basic'){
            this.setState({deliveryDate:'4dagar'})
            this.setState({shippingCost: 39})
            this.setState({shippingMethod: shipping})
        }
        else{
            this.setState({deliveryDate:'ha ha ha...'})
            this.setState({shippingCost: 0})
            this.setState({shippingMethod: shipping})
        }
    }

    private onSubmit = (customerInfoFromForm: customerInfo) => {
        // Sätt stateeet i CheckOut
        this.setState({
            customerInfo: customerInfoFromForm
            step: 2
        })
    } 

    render(){
        let total = 500 + this.state.shippingCost
        const { step } = this.state
        switch(step){
            case 1:
                return(
                    <>
                        <h2>Här är listan på allt du vill köpa! (eller kommer vara)</h2>
                        <AddressForm onSubmit={this.onSubmit}/>
                        <Shipping
                            
                            shippingMethod = {this.state.shippingMethod}
                            onShipmentChange = {event =>this.handleShippingRadio(event)}
                            
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
                if(this.state.customerInfo) {
                    return(
                        <div style = {temporaryStyling}>
                            <p>Skickas till:</p>
                            <p>{this.state.customerInfo.firstName} {this.state.lastName}</p>
                            <p>{this.state.customerInfo.address}</p>
                            <p>{this.state.customerInfo.zipCode} {this.state.city}</p>
                            <br/>
                            <p>E-Mail: {this.customerInfo.state.eMail}</p>
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
}

const temporaryStyling:CSSProperties ={
    border: '2px solid blue',
    margin: '3rem',
    padding: '2rem'
}