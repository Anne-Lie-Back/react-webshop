import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props{
    nextStep: () => void
    name: string
    onChangeName: (event:any) => void
    address: string
    onChangeAddress: (event:any) => void
    zipCode: number
    onChangeZipCode: (event:any) => void
    city: string
    onChangeCity: (event:any) => void
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

  const next = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.nextStep();
  }

  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Namn" value={props.name} onChange = {props.onChangeName}/>
        <TextField id="standard-basic" label="Adress" value={props.address} onChange = {props.onChangeAddress}/>
        <TextField id="standard-basic" label="Postnummer" value={props.zipCode} onChange = {props.onChangeZipCode}/>
        <TextField id="standard-basic" label="Ort" value={props.city} onChange = {props.onChangeCity}/>
        </form>
        <Button variant="contained" 
          color="primary"
          onClick = {next}> Fortsätt </Button>
    </>
  );
}
