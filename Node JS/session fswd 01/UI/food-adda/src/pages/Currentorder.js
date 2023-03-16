import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CiCircleRemove } from "react-icons/ci";

export default function Currentorder() {
  return (
    <div className="container py-5" id="currentOrder-wrapper">
      <h3 className="text-center mb-5">Current Order</h3>
      {/* MAP THE BELOW CARD NOW */}
      <div>
        <div className="d-flex justify-content-between px-2 mb-2">
          <div>Order1</div>
          <div className="text-right">09:00 PM</div>
          <div>
            <CiCircleRemove />
          </div>
        </div>
        <Card>
          <Card.Header>Aloo Paratha x 1</Card.Header>
          <Card.Body>
            <Card.Title>John Mclene</Card.Title>
            <Card.Text>22, RT nagar Delhi-56</Card.Text>
            <Button variant="dark">Full Details</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
