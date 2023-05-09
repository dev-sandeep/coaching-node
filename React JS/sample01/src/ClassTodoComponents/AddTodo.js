import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChangeHandler(event){
        this.setState({
           todo:  event.target.value
        });
    }

    onSave(){
        this.props.update(this.state.todo);
    }

    render(){
        return (
            <>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Your Todo Item"
                    aria-describedby="basic-addon2"
                    onChange={this.onChangeHandler}
                    />
                    <Button onClick={this.onSave} variant="outline-secondary" id="button-addon2">
                        Save
                    </Button>
                </InputGroup>
            </>
        );
    }
}

export default AddTodo;