import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTodo = ({update})=>{
    const [todoText, setTodoText] = React.useState('');
    
    const onSave = ()=>{
        update(todoText);
        setTodoText('');
    }

    const onChangeHandler = (e)=>{
        setTodoText(e.target.value);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Your Todo Item"
                aria-describedby="basic-addon2"
                onChange={onChangeHandler}
                value={todoText}
                />
                <Button onClick={onSave} variant="outline-secondary" id="button-addon2">
                    Save
                </Button>
            </InputGroup>
        </>
    );
}

export default AddTodo;