import React, {CSSProperties} from 'react'
import AddressForm from './AddressForm'
import Payment from './Payment'
import Button from '@material-ui/core/Button'
import { CustomerInfo, CustomerPaymentInfo } from './../../typings'
import { Grid } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import HomeButton from './HomeButton'
import ShoppingCart from '../ShoppingCart';
import { CartContext , State as CartState} from '../../contexts/cartContext';
import ShoppigCartCheckout from './../ShoppingCartCheckout'
import mockAPI from '../../mockAPI';
import { Link } from 'react-router-dom'

interface Props{
    cartState: CartState
}

interface State{
    step:number,
    customerInfo?:any
    customerPaymentInfo?:any
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

    componentDidUpdate(prevProps: Props, prevState: State){
        if(this.state.step === 3 && prevState.step !== 3){
            this.props.cartState.emptyCart()
        }
    }

    render(){
        const { step } = this.state
        let continueButton:any
        if(!this.state.disableOrderButton){
            continueButton = <Button 
                                variant="contained" 
                                color="primary"
                                style={{margin:'0 0 1em 1em'}}
                                onClick = {this.previousStep}> 
                                Stämmer inte?                                   
                            </Button>
        }

        switch(step){
            case 1:
                return(
                    <div>
                        <HomeButton/>
                        <Grid 
                            container
                            justify="center"
                            style={gridStyle}
                        >
                            <Grid item xs={12} sm={6}>
                                <Card style={cardStyle}>
                                        <Typography color="primary" variant="h4" style={{marginTop:"1.5em"}}>
                                            Checkout
                                        </Typography>
                                        {this.props.cartState.cartList.length > 0 ? 
                                        <div>
                                            <ShoppingCart/>
                                            <AddressForm 
                                                customerInfo={this.state.customerInfo} 
                                                onSubmit={this.onAddressFormSubmit}
                                            />
                                        </div>
                                        :
                                        <div>
                                            <br></br>
                                            <Typography variant="h5" color="primary">Kundvagnen är tom.</Typography>
                                            <Typography variant="h5" color="primary">Gå till <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Startsidan</Link></Typography>
                                        </div>
                                        }
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                )
            break
            case 2:
                if(this.state.customerInfo) {
                    return(
                        <CartContext.Consumer>
                        {(cartState) => (
                             <div>
                                <HomeButton/>
                                <Grid container
                                    justify="center"
                                    style={gridStyle}
                                >
                                    <Grid item xs={12} sm={6}>

                                        <Card style={cardStyle}>
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
                                                <Typography variant="h5" color="primary">
                                                    Totalkostnad: {cartState.cartTotalPrice + this.state.customerInfo?.shippingCost} kr 
                                                    <span style = {{fontSize: '0.6rem'}}>(varav {cartState.cartTotalPrice * 0.25} kr moms).</span>
                                                </Typography>
                        
                                                <b/>
                                                <Payment
                                                onSubmit={this.onPaymentFormSubmit}
                                                customerInfo={this.state.customerInfo}
                                                isDisabled = {this.state.disableOrderButton}
                                                />
                                                {continueButton}
                                        </Card>
                                    </Grid>
                                </Grid>
                             </div>               

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
                            <div>
                                <HomeButton/>
                                <Grid container
                                    justify="center"
                                    style={gridStyle}
                                >
                                    <Grid item xs={12} sm={6}>
                                        <Card style={cardStyle}>
                                            <h1>Bravo!</h1>
                                            <p>Du har beställt supergott te för den totala kostnaden av {cartState.savedCartTotalPrice + this.state.customerInfo?.shippingCost}kr! <br/> Vi har skickat bekräftelse till din mail: {this.state.customerInfo?.email}</p>
                                            <p>Beräknad leveransdag: {this.state.customerInfo?.deliveryDate}</p>
                                            <p>Ditt ordernummer är: {this.state.orderNumber}</p>
                                            <ShoppigCartCheckout/>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>

                        )}                   
                        </CartContext.Consumer>
                    )
                }
                break
        }
    }
}


const cardStyle:CSSProperties ={
    padding: '2rem'
}

const gridStyle:CSSProperties ={
    maxWidth:'100vw',
}