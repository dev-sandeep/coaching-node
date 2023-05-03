import * as React from 'react';
import {Button} from "react-bootstrap";

export function BoxFn(props){
    return (
        <div className='box-red'>
            This is my red box {props.hero} 
        </div>
    );
}

export class Box extends React.Component{
    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            fname: "Peter",
            lname: "Parker"
        }

        this.changeFName = this.changeFName.bind(this);
    }

    changeFName(){
        this.setState({
            fname: "Gangadhar"
        });
        console.log("I am here!");
    }

    componentDidMount(){
        console.log("Component mounted");
    }

    componentWillUnmount(){
        console.log("Are you sure");
    }
    
    componentDidUpdate(){
        console.log("my component updated");
    }

    shouldComponentUpdate(prevState, CurrState){
        console.log("should the component updated", prevState, CurrState);
        return true;
    }

    render(){
        return (
            <div className='box-red'>
                {this.state.fname} {this.state.lname}
                <br />
                <Button onClick={this.changeFName}>Change First Name</Button>
            </div>
        );
    }
}

// class A{
//     constructor(a){
//         console.log(a);
//     }
// }

// const a = new A(1);