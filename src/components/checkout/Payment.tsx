import React, {CSSProperties} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CustomerPaymentInfo} from './../../typings'
import FormHelperText from '@material-ui/core/FormHelperText';

interface Props{
  onSubmit: (customerPaymentInfo: CustomerPaymentInfo) => void
    customerInfo: any
/*   handleChange:(userInput:string) => ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
  values: any */
}

export default class Payment extends React.Component<Props, CustomerPaymentInfo>{
    constructor(props:Props){
        super(props)
        this.state = {
            paymentMethod:'',
            isPaymentError: false,
            paymentErrorText:'',

            cardOwner: this.props.customerInfo.firstName + ' ' + this.props.customerInfo.lastName,
            isCardOwnerError: false,
            cardOwnerErrorText: '',
            
            cardNr: '',
            isCardNrError: false,
            cardNrErrorText: '',

            cardExp: '',
            isCardExpError: false,
            cardExpErrorText: '',

            cardCVC: '',
            isCardCVCError: false,
            cardCVCErrorText: '',

            swishNr: this.props.customerInfo.mobile,
            isSwishNrError: false,
            swishErrorText: '',

            emailFaktura: this.props.customerInfo.email,
            isEmailFakturaError: false,
            emailErrorText: ''
        }
    }

    validateInput = () =>{
    
      let isError = false
      const errors = {paymentErrorText:'', isPaymentError: false, cardOwnerErrorText:'', isCardOwnerError:false, isCardNrError:false, cardNrErrorText:'', isCardExpError:false, cardExpErrorText: '', isCardCVCError: false, cardCVCErrorText: '', 
        isSwishNrError: false, swishErrorText: '', isEmailFakturaError: false, emailErrorText: ''};

      if(this.state.paymentMethod === ''){
        isError = true
        errors.paymentErrorText =  'Du måste välja ett betalsätt'
        errors.isPaymentError = true
      }

     if(this.state.paymentMethod  === 'Bankkort'){  
       
      if(this.state.cardOwner.length < 4){
        isError = true
        errors.cardOwnerErrorText = 'Ogiltigt namn'
        errors.isCardOwnerError = true   
      }
        const cardnoVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
        const cardnoMC = /^(?:5[1-5][0-9]{14})$/

        if((this.state.cardNr.match(cardnoMC))||(this.state.cardNr.match(cardnoVisa))){
          errors.isCardNrError = false
        }
        else{
          isError = true
          errors.cardNrErrorText =  'ogiltigt kort-nummer'
          errors.isCardNrError = true
        }

        const cardExpVal = /^(0?[1-9]|1[012])[\/\-](?:202[0-5])/
        //const cardExpVal = /^([0-1][0-9][-\s\.]?:202[0-5])$/
 
       if(this.state.cardExp.match(cardExpVal)){
         errors.isCardExpError = false
       }
       else{
         isError = true
         errors.cardExpErrorText =  'ogiltigt, MM/YYYY'
         errors.isCardExpError = true
       } 

      const cardCVCVal = /^\d{3}$/

      if( this.state.cardCVC.match(cardCVCVal)){
        errors.isCardCVCError= false
      }
        else{
          isError = true
          errors.cardCVCErrorText =  'tre siffror'
          errors.isCardCVCError = true
      }
      }
 
      if(this.state.paymentMethod  === 'Swish'){
        console.log(this.state.swishNr)
        const phoneVal = /^[\+]?[(]?[0-9]{3}[)]?[-/s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

        if( this.state.swishNr.match(phoneVal)){
            errors.isSwishNrError = false
        }
        else{
          isError = true
          errors.swishErrorText =  'ogiltigt mobilnummer-format'
          errors.isSwishNrError = true
        }
  
      } 

      
      if(this.state.paymentMethod  === 'Faktura'){  
        const mailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if( this.state.emailFaktura.match(mailVal)){
            errors.isEmailFakturaError = false
        }
        else{
          isError = true
          errors.emailErrorText =  'ogiltig e-mail'
          errors.isEmailFakturaError = true
        }
  
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

/*     handleChange = (input:string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({[input]: event.target.value})
      } */

/*      handleChange = (event.target.value) => {
        this.setState({[input]: event.target.value})
    }  */

/*     handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState
      setValue((event.target as HTMLInputElement).value);
    }; */

     handleRadioChange = (event: { target: { value: any } }) => { 
        this.setState({paymentMethod: event.target.value})
        //this.setShipmentDetails(event.target.value)
    } 

     handleMoreInformationBank() {
      if(this.state.paymentMethod === 'Bankkort'){
      return(
        <form autoComplete="on" >
          <TextField id="outlined-basic" 
            label="kortägare" 
            variant="outlined"
            name="ccname"
            autoComplete="cc-name"
            value={this.state.cardOwner}
            error = {this.state.isCardOwnerError}
            helperText = {this.state.cardOwnerErrorText}
            //onChange = {this.handleChange('kortNr')}
            />
            <br/>
          <TextField id="outlined-basic" 
            label="kortnummer" 
            variant="outlined"
            name="cardnumber"       
            autoComplete="cc-number"
            value= {this.state.cardNr} 
            error = {this.state.isCardNrError} 
            helperText= {this.state.cardNrErrorText}
            onChange={(event) => { this.setState({ cardNr: event.target.value }) }}
            //onChange = {this.handleChange('kortNr')}
            />
            <br/>
          <TextField id="outlined-basic" 
            label="Giltighetstid" 
            variant="outlined"
            name="cc-exp"
            autoComplete="cc-exp"
            placeholder="MM/YYYY"
            value= {this.state.cardExp} 
            error = {this.state.isCardExpError} 
            helperText= {this.state.cardExpErrorText}
            inputProps={{ maxLength: 7}}
            style = {{width:'15ch'}}
            onChange={(event) => { this.setState({ cardExp: event.target.value }) }}
            //onChange = {this.handleChange('kortNr')}
            />
          <TextField id="outlined-basic" 
            label="CVC" 
            variant="outlined"
            name="cvc"
            autoComplete="cc-csc"
            placeholder="nnn"
            value= {this.state.cardCVC} 
            error = {this.state.isCardCVCError} 
            helperText= {this.state.cardCVCErrorText}
            inputProps={{ maxLength: 3}}
            style = {{width:'10ch'}}
            onChange={(event) => { this.setState({ cardCVC: event.target.value }) }}
            //onChange = {this.handleChange('kortNr')}
            />
          <br/>  
        </form>
      )}
    }

  handleMoreInformationSwish() {
    if(this.state.paymentMethod  === 'Swish'){
    return(
      <TextField id="outlined-basic" 
        label="Mobil-nummer"
        variant="outlined"
        value={this.state.swishNr}
        error = {this.state.isSwishNrError} 
        helperText = {this.state.swishErrorText}
        onChange={(event) => { this.setState({ swishNr: event.target.value }) }}    />
    )}
  }

  handleMoreInformationFaktura() {
    if(this.state.paymentMethod  === 'Faktura'){
    
        
            return(
                <TextField 
                label= "E-mail"
                variant="outlined"
                color="secondary"
                name="email"
                autoComplete="email"
                value={this.state.emailFaktura}
                onChange={(event) => { this.setState({ emailFaktura: event.target.value }) }}
        /*         error = {this.state.isEmailError} 
                helperText= {this.state.emailError}  */
                /* onChange ={(event) => { this.setState({ email:event.target.value }) }} */ />
            )}
        
  }
render(){
    return (
      <>
        <FormControl component="fieldset" error = {this.state.isPaymentError} style = {spaceing}>
          <FormLabel component="legend">Betalsätt</FormLabel>
          <FormHelperText>{this.state.paymentErrorText}</FormHelperText>
          <RadioGroup aria-label="gender" name="gender1" onChange={this.handleRadioChange}>
            <FormControlLabel 
              value="Bankkort" 
              control={<Radio />} 
              label="Bankkort" />
            {this.handleMoreInformationBank()}
            <FormControlLabel value="Swish" control={<Radio />} label="Swish" />
            {this.handleMoreInformationSwish()}
            <FormControlLabel value="Faktura" control={<Radio />} label="Faktura" />
            {this.handleMoreInformationFaktura()}
          </RadioGroup>
        </FormControl>
        <br/>
        <Button
            type = 'submit'
            onClick={() => this.onSubmit()}
            variant="contained" 
            color="primary">
              BETALA
          </Button>  
      </>
    );

}
  

}

const spaceing:CSSProperties = {
    margin: '2rem 0'
}