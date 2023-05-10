import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardContent = ({children})=>{
   
    return (<Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        {children}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>);
}

export const SayHello = ()=>{
    return (
        <CardContent>
            <h1>Hello World</h1>
            <h5>Test</h5>
            <h5>Test</h5>
            <h5>Test</h5>
        </CardContent>
    );
}

export const SayBye = ()=>{
    return (
        <CardContent>
            <h1>Hello World</h1>
        </CardContent>
    );
}

