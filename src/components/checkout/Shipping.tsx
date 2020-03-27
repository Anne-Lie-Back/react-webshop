import React, {CSSProperties} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
/* import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; */

interface Props{
  shippingMethod:string,
  onShipmentChange: (event: { target: { value: any } }) => void
/*    shippingCost:any,
  deliveryDate:any  */
}

export default function Shipping(props:Props){
/* 
  const next = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.nextStep();
  }

  const back = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.previousStep();
  } */

/*     function handleMoreInformationBank() {
      if(value === 'Bankkort'){
      return(
        <TextField id="outlined-basic" 
          label="kortnummer" 
          onChange = {props.handleChange('kortNr')}
          defaultValue = {props.values.kortNr} />
      )}
  }

  function handleMoreInformationSwish() {
    if(value === 'Swish'){
    return(
      <TextField id="outlined-basic" label="Mobil-nummer"
      onChange = {props.handleChange('swishNr')}
      defaultValue = {props.values.swishNr} />
    )}
  }

  function handleMoreInformationFaktura() {
    if(value === 'Faktura'){
    return(
      <TextField id="outlined-basic" 
      label= "adress"
      onChange = {props.handleChange('fakturaAdress')}
      defaultValue = {props.values.fakturaAdress} />
    )}
  } */

  //Logs the correct current value
    console.log(props.shippingMethod)

    return (
      <>
        <FormControl component="fieldset">

        </FormControl>
{/*         <Button variant="contained" 
            color="primary"
            onClick = {back}> Tillbaka 
        </Button>
        <Button variant="contained" 
            color="primary"
            onClick = {next}> Fortsätt 
        </Button> */}
      </>
    );
  

}