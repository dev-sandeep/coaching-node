import { Button, Card } from "react-bootstrap";

export default function OrderItem() {
    return (
        <Card className="mb-2">
            <Card.Header>Aloo Paratha x 1</Card.Header>
            <Card.Body>
                <Card.Title>John Mclene</Card.Title>
                <Card.Text>
                22, RT nagar Delhi-56
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}