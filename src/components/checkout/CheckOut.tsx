import React, {CSSProperties} from 'react'
import AddressForm from './Address'
import Payment from './Payment'
//import Shipping from './Shipping'
import Button from '@material-ui/core/Button';
import { CustomerInfo, CustomerPaymentInfo } from './../../typings'
import ShoppingCart from '../ShoppingCart';
//import Container from '@material-ui/core/Container';
// import Admin from '../admin/Admin'

interface Props{
}


interface State{
    step:number,
    customerInfo?: CustomerInfo
    customerPaymentInfo?: CustomerPaymentInfo
}

export default class CheckOut extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            step: 1,
            customerInfo: undefined,
            customerPaymentInfo: undefined
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

/*       handleFirstNameInput = (event: { target: { value: any } }) => this.setState({firstName:event.target.value})
      handleLastNameInput = (event: { target: { value: any } }) => this.setState({lastName:event.target.value})
      handleAddressInput = (event: { target: { value: any } }) => this.setState({address:event.target.value})
      handleZipCodeInput = (event: { target: { value: any } }) => this.setState({zipCode:event.target.value})
      handleCityInput = (event: { target: { value: any } }) => this.setState({city:event.target.value})
      handleEMailInput = (event: { target: { value: any } }) => this.setState({eMail:event.target.value})
      handleMobNrInput = (event: { target: { value: any } }) => this.setState({mobNr:event.target.value}) */

/*       handleShippingRadio = (event: { target: { value: any } }) => { 
        this.setShipmentDetails(event.target.value)
        }
 */
/*     private setShipmentDetails = (shipping:string) =>{
        
        if(shipping === 'PostNord Express'){
            this.setState({deliveryDate:'24h från nu'})
            this.setState({shippingCost: 99})
            }
        else if(shipping === 'PostNord Basic'){
            this.setState({deliveryDate:'4dagar'})
            this.setState({shippingCost: 39})
        }
        else{
            this.setState({deliveryDate:'ha ha ha...'})
            this.setState({shippingCost: 0})
        }
    } */

    private onAddressFormSubmit = (customerInfoFromForm: CustomerInfo) => {
        // Sätt stateeet i CheckOut
        this.setState({
            customerInfo: customerInfoFromForm,
            step: this.state.step + 1
        })
    }

    private onPaymentFormSubmit = (customerInfoFromForm: CustomerPaymentInfo) => {
        // Sätt stateeet i CheckOut
        this.setState({
            customerPaymentInfo: customerInfoFromForm,
            step: this.state.step + 1
        })
    } 

    render(){
        let total
        if(this.state.customerInfo){
            total = 500 + this.state.customerInfo.shippingCost
        }
        
        const { step } = this.state
        switch(step){
            case 1:
                return(
                    <>
                        <ShoppingCart/>
                        <AddressForm 
                            customerInfo={this.state.customerInfo} 
                            onSubmit={this.onAddressFormSubmit}/>
                    </>
                )
                break
            case 2:
                if(this.state.customerInfo) {
                    return(
                        <div style = {temporaryStyling}>
                            <p>Skickas till:</p>
                            <p>{this.state.customerInfo.firstName} {this.state.customerInfo.lastName}</p>
                            <p>{this.state.customerInfo.address}</p>
                            <p>{this.state.customerInfo.zipCode} {this.state.customerInfo.city}</p>
                            <br/>
                            <p>E-Mail: {this.state.customerInfo.email}</p>
                            <p>Mobilnummer: {this.state.customerInfo.mobile}</p>
    
                            <br/>
    
                            <p>Valt Fraktsätt: {this.state.customerInfo.shippingMethod} </p>
                            <p>Förväntad fraktdag: {this.state.customerInfo.deliveryDate} </p>
                            <p> Kostnad: 500kr plus frakt (+{this.state.customerInfo.shippingCost}kr)</p>
                            <p>Totalkostnad: {total}</p>
    
                            <b/>
                            <Button variant="contained" 
                                color="primary"
                                onClick = {this.nextStep}> Stämmer?
                            </Button>
                            <Button variant="contained" 
                                color="primary"
                                onClick = {this.previousStep}> Stämmer inte?
                            </Button>
                        </div>
                    )
                }
                break
                case 3:
                if(this.state.customerInfo) {
                    return(
                        <>
                        <Payment
                            onSubmit={this.onPaymentFormSubmit}
                            customerInfo={this.state.customerInfo}/>
                            <Button variant="contained" 
                            color="primary"
                            onClick = {this.previousStep}> Tillbaka 
                            </Button>
                        </>
                    )
                }
                break

                case 4:
                    if(this.state.customerInfo && this.state.customerPaymentInfo) {
                        return(
                            <>
                                <h1>Bravo!</h1>
                                <p>Du beställde supergott te! <br/> Vi har skickat bekräftelse till din mail: {this.state.customerInfo.email}</p>
                            </>
                        )
                    }
                    break
        }
    }
}

const temporaryStyling:CSSProperties ={
    border: '2px solid blue',
    margin: '3rem',
    padding: '2rem'
}