import React, {CSSProperties} from 'react'
import AddressForm from './AddressForm'
import Payment from './Payment'
import Button from '@material-ui/core/Button';
import { CustomerInfo, CustomerPaymentInfo } from './../../typings'
import ShoppingCart from '../ShoppingCart';
import { CartContext } from '../../contexts/cartContext';
import { Container } from '@material-ui/core';
import ShoppigCartCheckout from './../ShoppingCartCheckout'
import mockAPI from '../../mockAPI';
// import Admin from '../admin/Admin'

interface Props{
}

interface State{
    step:number,
    customerInfo?: CustomerInfo
    customerPaymentInfo?: CustomerPaymentInfo
    orderNumber:number
    disableOrderButton: boolean
}

export default class CheckOut extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            step: 1,
            customerInfo: undefined,
            customerPaymentInfo: undefined,
            orderNumber: 0,
            disableOrderButton: false,
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

    private onAddressFormSubmit = (customerInfoFromForm: CustomerInfo) => {
        // Sätt stateeet i CheckOut
        this.setState({
            customerInfo: customerInfoFromForm,
            step: this.state.step + 1
        })
    }

    private onPaymentFormSubmit = (customerInfoFromForm: CustomerPaymentInfo) => {
        const ts = Math.round((new Date()).getTime() / 1000);
        console.log("waiting for API 3 sec, disable order button.")
        if(this.state.disableOrderButton === false){
            this.apiCall(customerInfoFromForm, ts)
        }
        this.setState({disableOrderButton: true})
    }

    async apiCall(customerInfoFromForm: CustomerPaymentInfo, ts: number){
       const response = await mockAPI()
       console.log(response)
       if(response){
        this.setState({
            customerPaymentInfo: customerInfoFromForm,
            step: this.state.step + 1,
            orderNumber: ts,
            disableOrderButton: false
        })
       }
       
    }

    render(){
        const { step } = this.state

        switch(step){
            case 1:
                return(
                    <Container>
                        <ShoppingCart/>
                        <AddressForm 
                            customerInfo={this.state.customerInfo} 
                            onSubmit={this.onAddressFormSubmit}/>
                    </Container>
                )
            break

            case 2:
                if(this.state.customerInfo) {
                    return(
                        <CartContext.Consumer>
                        {(cartState) => (                   
                            <Container>
                                <div style = {temporaryStyling}>
                                    <ShoppigCartCheckout/>
                                    <p>Skickas till:</p>
                                    <p>{this.state.customerInfo?.firstName} {this.state.customerInfo?.lastName}</p>
                                    <p>{this.state.customerInfo?.address}</p>
                                    <p>{this.state.customerInfo?.zipCode} {this.state.customerInfo?.city}</p>
                                    <br/>
                                    <p>E-Mail: {this.state.customerInfo?.email}</p>
                                    <p>Mobilnummer: {this.state.customerInfo?.mobile}</p>          
                                    <br/>           
                                    <p>Valt Fraktsätt: {this.state.customerInfo?.shippingMethod} ({this.state.customerInfo?.shippingCost} kr)</p>
                                    <p>Förväntad leveransdag: {this.state.customerInfo?.deliveryDate} </p>
{/*                                     <p> Kostnad: {cartState.cartTotalPrice} kr plus frakt (+{this.state.customerInfo?.shippingCost} kr)</p>
                                    <br/> */}
                                    <p>Totalkostnad: {cartState.cartTotalPrice + this.state.customerInfo?.shippingCost} kr 
                                        <span style = {{fontSize: '0.6rem'}}>(varav {cartState.cartTotalPrice * 0.25} kr moms).</span>
                                    </p>
            
                                    <b/>
                                    <Payment
                                    onSubmit={this.onPaymentFormSubmit}
                                    customerInfo={this.state.customerInfo}
                                    />
                                    <Button variant="contained" 
                                        color="primary"
                                        onClick = {this.previousStep}> Stämmer inte?
                                    </Button>
                                </div>
                            </Container>
                        )}                   
                        </CartContext.Consumer>
                    )
                }
                break

            case 3:
                if(this.state.customerInfo && this.state.customerPaymentInfo) {
                    return(
                        <CartContext.Consumer>
                        {(cartState) => (  
                            <Container>
                                <h1>Bravo!</h1>
                                <p>Du har beställt supergott te för den totala kostnaden av {cartState.cartTotalPrice + this.state.customerInfo?.shippingCost}kr! <br/> Vi har skickat bekräftelse till din mail: {this.state.customerInfo?.email}</p>
                                <p>Beräknad leveransdag: {this.state.customerInfo?.deliveryDate}</p>
                                <p>Ditt ordernummer är: {this.state.orderNumber}</p>
                                <ShoppigCartCheckout/>
                            </Container>
                        )}                   
                        </CartContext.Consumer>
                    )
                }
                break
        }
    }
}

const temporaryStyling:CSSProperties ={
    border: '2px solid #346933',
    margin: '3rem',
    padding: '2rem'
}