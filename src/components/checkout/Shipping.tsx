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
  onRadioChange: (event:any) => void
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
          <FormLabel component="legend">Betalsätt</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value = {props.shippingMethod} onChange={props.onRadioChange}>
            <h3>PostNord Express!</h3>
            <p>Leverans 24h. Pris: 99kr </p>
            <FormControlLabel
              value="PostNord Express" 
              control={<Radio />} 
              label="PostNord Express" />

            <h3>PostNord Basic!</h3>
            <p>Leverans: 4 dagar. Pris: 39kr</p>
            <FormControlLabel
                value="PostNord Basic" 
                control={<Radio />} 
                label="PostNord Basic" />

            <h3>PostMord!</h3>
            <p>Leverans: Aldrig. Pris: Fri frakt </p>
            <FormControlLabel 
                value="PostMord" 
                control={<Radio />} 
                label="PostMord" />
          </RadioGroup>
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