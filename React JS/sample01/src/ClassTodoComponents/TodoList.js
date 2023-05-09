import * as React from 'react';
import Table from 'react-bootstrap/Table';

class TodoList extends React.Component {
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