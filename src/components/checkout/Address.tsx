import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { customerInfo } from './../../typings'
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
  onSubmit: (customerInfo: customerInfo) => void
}

export default class AddressForm extends React.Component<Props, customerInfo> {

  constructor(props: Props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      zipCode: 0,
      city: '',
      email: '',
      mobile: 0
    }
  }

  private onSubmit = () => {
    // VALIDERING
    this.props.onSubmit(this.state)
  }

  render(){ 
    return (
      <>
          <form noValidate autoComplete="on" >
            <TextField id="standard-basic" color="secondary" label="Förnamn" value={this.state.firstName} onChange={(event) => { this.setState({ firstName: event.target.value }) }} />
            <TextField id="standard-basic" color="secondary" label="Efternamn" value={this.state.lastName} onChange={(event) => { this.setState({ lastName: event.target.value }) }}/>
            <br/>
            <TextField id="standard-basic" color="secondary" label="Adress" style = {{width:'52ch'}} value={this.state.address} onChange={(event) => { this.setSate({address: event.target.value}) }}/>
            <br/>
            <TextField id="standard-basic" color="secondary" label="Postnummer" value={this.state.zipCode} onChange = {(event) => { this.setState({ zipCode: event.target.value }) }}/>
            <TextField id="standard-basic" color="secondary" label="Ort" value={this.state.city} onChange ={(event) => { this.setState({ city: event.target.value }) }}/>
            <br/>
            <TextField id="standard-basic" color="secondary" label="E-Mail" value={this.state.email} onChange ={(event) => { this.setState({ email:event.target.value }) }} />
            <TextField id="standard-basic" color="secondary" label="Mobile" value={this.state.mobile} onChange ={(event) => { this.setState({ mobile: event.target.value }) }}/>
          </form>
  
          <Button
            onClick={() => this.onSubmit()}
            variant="contained" 
            color="primary">
              Fortsätt 
          </Button>
      </>
    );
    
  }

}

