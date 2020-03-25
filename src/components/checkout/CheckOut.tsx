import React from 'react'
import Address from './Address'

interface Props{
}
interface State{
    step:number,
    name:string
}

export default class CheckOut extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            step: 1,
            name: '',
            
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

      handleNameInput = (event: { target: { value: any } }) => this.setState({name:event.target.value})

    render(){
        const { step } = this.state
        console.log(this.state.name)
        switch(step){
            case 1:
                return(
                    <Address 
                        nextStep = {this.nextStep}
                        name = {this.state.name}
                        onChangeName = {this.handleNameInput}
                        
                    />
                )
            case 2:
                return(
                    <h1>How you wanna pay?</h1>
                )
        }
    }
}