import * as React from "react";
import { Button } from "react-bootstrap";

export class SaySomething extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roll: 123,
            lastName: 'lnu'
        }
        this.changeHero = this.changeHero.bind(this);
    }

    changeHero(){
        this.setState({
            lastName: 'Parker'
        });
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    componentDidUpdate(){
        console.log("component Updated");
    }

    componentWillUnmount(){
        console.log("component unmounting");
        debugger;
    }

    shouldComponentUpdate(prev, next){
        // console.log("restricting update", prev, next);
        return true;
    }

    render(){
        return (
            <>
                <h3>
                    Hello {this.state.roll} {this.props.name || 'Stranger'} {this.state.lastName}
                </h3>
                <Button onClick={this.changeHero}> Change the last name</Button>
            </>
        );
    }
}