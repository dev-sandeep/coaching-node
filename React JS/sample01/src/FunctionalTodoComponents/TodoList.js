import * as React from 'react';
import Table from 'react-bootstrap/Table';

const TodoList = ({todoList, markAsDone})=>{

    const doneBtnHandler = (id)=>{
        markAsDone(id);
    }
    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(todoList || []).map(function(el, key){
                        return (
                            <>
                                <tr className={el.status === 2?'hidden':''}>
                                    <td>{key + 1}</td>
                                    <td>{el.todo}</td>
                                    <td>
                                        <button onClick={()=>doneBtnHandler(el.id)} className='btn btn-success btn-sm'>
                                            Done
                                        </button>
                                    </td>
                                </tr>
                            
                            </>
                            
                        )
                    })}
                </tbody>
            </Table>
        </>
    );  
}

class TodoListOld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.todoList || []).map(function(el){
                            return (
                                <tr>
                                    <td>{el.id}</td>
                                    <td>{el.todo}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default TodoList;