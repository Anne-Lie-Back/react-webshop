import React, {CSSProperties}from 'react';
//import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { CustomerInfo } from './../../typings'
//import Button from '@material-ui/core/Button';

/* const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
); */

interface Props {
  onSubmit: (customerInfo: CustomerInfo) => void
  customerInfo: any
}

export default class AddressForm extends React.Component<Props, CustomerInfo> {

  constructor(props: Props) {
    super(props)
    this.state = {
      //errorColor: 'noErrorColor',
      firstName: '',
      isFirstNameError: false,
      firstNameError: '',

      lastName: '',
      isLastNameError: false,
      lastNameError: '',

      address: '',
      isAddressError: false,
      addressError: '',

      zipCode: '',
      zipCodeError: '',
      isZipCodeError: false,

      city: '',
      cityError: '',
      isCityError: false,

      email: '',
      emailError: '',
      isEmailError: false,

      mobile: '+46',
      isMobileError: false,
      mobileError: '',

      shippingMethod:'',
      isShippingError: false,
      shippingError: 'Välj ett fraktsätt',
      deliveryDate:'',
      shippingCost: ''
    }
  }

   validateInput = () =>{
    
    let isError = false
    const errors = {firstNameError:'', isFirstNameError: false, lastNameError:'', isLastNameError:false, isAddressError: false, 
      addressError: '', isZipCodeError:false, zipCodeError:'', isCityError: false, cityError:'', emailError:'', isEmailError: false, 
      mobileError:'', isMobileError: false, isShippingError:false, shippingError: 'Välj ett fraktsätt' };

    if(this.state.firstName.length < 1){
      isError = true
      errors.firstNameError = 'Minst 2 bokstäver'
      errors.isFirstNameError = true   
    }

    if(this.state.lastName.length < 1){
      isError = true
      errors.lastNameError = 'Minst 2 bokstäver'
      errors.isLastNameError = true   
    }

    if(this.state.address.length < 2){
      isError = true
      errors.addressError = 'Minst 3 tecken'
      errors.isAddressError = true   
    }

    if(this.state.city.length < 1){
      isError = true
      errors.cityError = 'Där kan man inte bo'
      errors.isCityError = true   
    }

    const zipCodeVal = /^\d{5}$/

    if( this.state.zipCode.match(zipCodeVal)){
      errors.isZipCodeError = false
    }
      else{
        isError = true
        errors.zipCodeError =  'fem siffror'
        errors.isZipCodeError = true
    }

    const mailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (mailVal.test(this.state.email)){
        errors.isEmailError = false
      }
    else{
      isError = true
      errors.emailError =  'ogiltig e-mail'
      errors.isEmailError = true
    } 
    
    const phoneVal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    if( this.state.mobile.match(phoneVal)){
        errors.isMobileError = false
    }
    else{
      isError = true
      errors.mobileError =  'ogiltigt mobilnummer-format'
      errors.isMobileError = true
    }

    if(this.state.shippingMethod === ''){
      isError = true
      errors.shippingError =  'Du måste välja fraktsätt'
      errors.isShippingError = true
    }

    if(isError){
      this.setState({
        ...this.state,
        ...errors,
      })
    }
    return isError
  }

  private onSubmit = () => {
    const err = this.validateInput()
    //VALIDATE HERE
    if(!err){
      this.props.onSubmit(this.state)
    }
    
  }

  private handleShipmentInput = (event: { target: { value: any } }) => { 
    this.setState({shippingMethod: event.target.value})
    this.setShipmentDetails(event.target.value)
    }

  private setShipmentDetails = (shipping:string) =>{
    console.log(this.state.shippingMethod)
        
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
}

  render(){ 
    
    
    return (
      <>
          <form autoComplete="on" >
            <TextField 
              id="standard-basic" label="Förnamn" 
              value={this.state.firstName} 
              error = {this.state.isFirstNameError} 
              helperText = {this.state.firstNameError} 
              onChange={(event) => { this.setState({ firstName: event.target.value }) }} 
            />
            <TextField 
              id="standard-basic" 
              color="secondary" 
              label="Efternamn" 
              value={this.state.lastName}  
              error = {this.state.isLastNameError} 
              helperText = {this.state.lastNameError} 
              onChange={(event) => { this.setState({ lastName: event.target.value }) }}/>
            <br/>
            <TextField 
              id="standard-basic" 
              color="secondary" 
              label="Adress" 
              style = {{width:'52ch'}} 
              value={this.state.address} 
              error = {this.state.isAddressError} 
              helperText = {this.state.addressError} 
              onChange={(event) => { this.setState({address: event.target.value}) }}
            />
            <br/>
            <TextField 
              id="standard-basic" 
              color="secondary" 
              label="Postnummer" 
              value={this.state.zipCode} 
              error = {this.state.isZipCodeError} 
              helperText = {this.state.zipCodeError} 
              onChange = {(event) => { this.setState({ zipCode: event.target.value }) }}/>
            <TextField 
              id="standard-basic" 
              color="secondary" 
              label="Ort" 
              value={this.state.city} 
              error = {this.state.isCityError} 
              helperText = {this.state.cityError} 
              onChange ={(event) => { this.setState({ city: event.target.value }) }}/>
            <br/>
            <TextField 
              id="standard-basic" 
              color="secondary" 
              label="E-Mail" 
              value={this.state.email} 
              error = {this.state.isEmailError} 
              helperText= {this.state.emailError} 
              onChange ={(event) => { this.setState({ email:event.target.value }) }} />
            <TextField 
              id="standard-basic" 
              color="secondary" 
              label="Mobile" 
              value={this.state.mobile} 
              error = {this.state.isMobileError} 
              helperText = {this.state.mobileError} 
              onChange ={(event) => { this.setState({ mobile: event.target.value }) }}
            />
            <br/>
            
              <FormControl error = {this.state.isShippingError}>
                <br/>
              <FormLabel component="legend">Fraktsätt</FormLabel>
              <FormHelperText>{this.state.shippingError}</FormHelperText>
              <RadioGroup  
                value = {this.state.shippingMethod} 
                onChange = {this.handleShipmentInput}
                style={flex}>
                  <div style  = {temporaryStyling}>
                    <h3>PostNord Express!</h3>
                    <p>Leverans 24h. Pris: 99kr </p>
                    <FormControlLabel
                      value="PostNord Express" 
                      control={<Radio />} 
                      label="PostNord Express"
                    />
                  </div>
                  <div style  = {temporaryStyling}>
                    <h3>PostNord Basic!</h3>
                    <p>Leverans: 4 dagar. Pris: 39kr</p>
                    <FormControlLabel
                      value="PostNord Basic" 
                      control={<Radio />} 
                      label="PostNord Basic" 
                    />
                  </div>
                  <div style  = {temporaryStyling}>
                    <h3>PostMord!</h3>
                    <p>Leverans: Aldrig. Pris: Fri frakt </p>
                    <FormControlLabel 
                      value="PostMord" 
                      control={<Radio />} 
                      label="PostMord" 
                    />
                  </div>
              </RadioGroup>
            </FormControl>
          </form>
          <Button
            type = 'submit'
            onClick={() => this.onSubmit()}
            variant="contained" 
            color="primary">
              Fortsätt 
          </Button>         
      </>
    );
  }
}

const temporaryStyling:CSSProperties = {
    border: '2px solid #346933',
    margin: '2rem',
    padding: '1rem'

}
const flex:CSSProperties = {
  display:'flex',
  flexDirection:'row',
  flexWrap: 'wrap'
}
