import React from 'react'
import {RouteComponentProps , withRouter } from 'react-router-dom';
import { RouteMatch } from '../../typings';

interface Props extends RouteComponentProps{
    match: RouteMatch
}
interface State{}

class Product extends React.Component<Props, State>  {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Product: {this.props.match.params.id}</h1>
                <h3>Url: {this.props.match.url}</h3>
            </div>
        );
    }
}

export default withRouter(Product)
