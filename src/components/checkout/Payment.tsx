import React, {CSSProperties} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props{
    customerInfo: any
/*   handleChange:(userInput:string) => ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
  values: any */
}

interface State{
    paymentMethod: string
    kortNr: any
    swishNr: any
    emailFaktura:any
}

export default class Payment extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            paymentMethod:'',
            kortNr: '',
            swishNr: '',
            emailFaktura:''
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
        <TextField id="outlined-basic" 
          label="kortnummer" 
          //onChange = {this.handleChange('kortNr')}
          />
      )}
    }

  handleMoreInformationSwish() {
    if(this.state.paymentMethod  === 'Swish'){
    return(
      <TextField id="outlined-basic" label="Mobil-nummer"
     // onChange = {this.handleChange('swishNr')}
      /* defaultValue = {values.swishNr} */ />
    )}
  }

  handleMoreInformationFaktura() {
    if(this.state.paymentMethod  === 'Faktura'){
    
        if(this.props.customerInfo) {
            return(
                <TextField 
                id="standard-basic" 
                color="secondary"
                name="email"
                autoComplete="email"
                label="E-Mail" 
                value={this.props.customerInfo.email} 
        /*         error = {this.state.isEmailError} 
                helperText= {this.state.emailError}  */
                /* onChange ={(event) => { this.setState({ email:event.target.value }) }} */ />
            )}
        }
  }
render(){
    return (
      <>
        <FormControl component="fieldset" style = {spaceing}>
          <FormLabel component="legend">Betalsätt</FormLabel>
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
      </>
    );

}
  

}

const spaceing:CSSProperties = {
    margin: '2rem 0'
}