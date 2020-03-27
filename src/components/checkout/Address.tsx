import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';

interface Props{

    firstName: string
    onChangeFirstName: (event:any) => void
    lastName: string
    onChangeLastName: (event:any) => void
    address: string
    onChangeAddress: (event:any) => void
    zipCode: any
    onChangeZipCode: (event:any) => void
    city: string
    onChangeCity: (event:any) => void
    eMail: string
    onChangeEMail: (event:any) => void
    mobNr: any
    onChangeMobNr: (event:any) => void
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function BasicTextFields(props:Props) {
  const classes = useStyles();

/*   const next = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.nextStep();
  } */

  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" color="secondary" label="Förnamn" value={props.firstName} onChange = {props.onChangeFirstName}/>
          <TextField id="standard-basic" color="secondary" label="Efternamn" value={props.lastName} onChange = {props.onChangeLastName}/>
          <br/>
          <TextField id="standard-full-width" label="Adress" style = {{width:'52ch'}}value={props.address} onChange = {props.onChangeAddress}/>
          <br/>
          <TextField id="standard-basic" color="secondary" label="Postnummer" value={props.zipCode} onChange = {props.onChangeZipCode}/>
          <TextField id="standard-basic" color="secondary" label="Ort" value={props.city} onChange = {props.onChangeCity}/>
          <br/>
          <TextField id="standard-basic" color="secondary" label="E-Mail" value={props.eMail} onChange = {props.onChangeEMail}/>
          <TextField id="standard-basic" color="secondary" label="Mobile" value={props.mobNr} onChange = {props.onChangeMobNr}/>
        </form>
    </>
  );
}
