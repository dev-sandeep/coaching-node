import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import OrderItem from '../components/current-order/OrderItem';

export default function Currentorder() {

    return (

        <div className='container p-5'>
            <h3 className='text-center font-weight-bolder mb-4'>Current Order</h3>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='section-header justify-content-between d-flex w-100'>
                        <div>Order</div>
                        <div>9:00 PM</div>
                    </div>
                    <div className='section-body mb-5'>
                        <OrderItem />
                        <OrderItem />
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                        <button type="button" className="btn btn-primary w-100" >Accept</button>
                        </div>
                        <div className='col-4'>
                        <button type="button" className="btn btn-dark w-100" >Reject</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            

                    
                
                
        </div>
    )


}