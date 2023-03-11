import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiCircleRemove } from 'react-icons/ci';

export default function Currentorder() {

    return (

        <div className='container p-5'>
            <h3 className='text-center'>Current Order</h3>
                <div className="row container">
                    <div className='col-5'>Order1</div>
                    <div className='col-6 text-right'>09:00 PM</div>
                    <div className='col-1'><CiCircleRemove/></div>  
                </div>
                <Card>
                    <Card.Header>Aloo Paratha x 1</Card.Header>
                    <Card.Body>
                        <Card.Title>John Mclene</Card.Title>
                        <Card.Text>
                        22, RT nagar Delhi-56
                        </Card.Text>
                        <Button variant="dark">Full Details</Button>  
                    </Card.Body>
                    </Card>

                    <div className="row container">
                    <div className='col-5'>Order2</div>
                    <div className='col-6 text-right'>09:00 PM</div>
                    <div className='col-1'><CiCircleRemove/></div>  
                </div>
                <Card>
                    <Card.Header>Aloo Paratha x 1</Card.Header>
                    <Card.Body>
                        <Card.Title>John Mclene</Card.Title>
                        <Card.Text>
                        22, RT nagar Delhi-56
                        </Card.Text>
                        <Button variant="dark">Full Details</Button>  
                    </Card.Body>
                    </Card>
                
        </div>
    )


}