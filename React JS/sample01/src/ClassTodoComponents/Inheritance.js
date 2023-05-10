import * as React from "react";

class ParentClass extends React.Component {
    constructor(){
        super();
    }

    sayHello(){
        console.log("jeloo");
    }

    render(){
        return null;
    };
}

class Child1 extends ParentClass{
    constructor(){
        super();
        this.handler = this.handler.bind(this);
    }

    handler(){
        this.sayHello();
    }

    render(){
        return (
            <button onClick={this.handler}>
                Say Hello
            </button>
        );
    }
}


export default Child1;


















// class ParentClass extends React.Component{
//     constructor(props){
//         super(props);  

//         this.sayHello = this.sayHello.bind(this);
//     }
    
//     sayHello(){
//         console.log("called from parent"+this.props.name);
//     }

//     render(){
//         return false;
//     }
    
// }

// class ChildClass extends ParentClass{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return <>
//             <div>From Parent</div>
//             <button onClick={this.sayHello}>Click Me</button>
//         </>
//     }
    
// }

// export default ChildClass;