import React from 'react';
import { dummyOrders } from '../components/current-order/dummyData';


const PreviousOrders = () => {


    return (
        <div className="container">
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <h2 className='mb-3 font-weight-bolder text-center'>Orders</h2>
                    <ul id="order-list">
                        {dummyOrders.map((orders) => {
                            return(
                            <li className="order-item">
                                <span className="order-number">{orders.order}</span>
                                <span className="order-detail">
                                    {orders.item}
                                </span>
                                <span className="order-total">{`Total : $${orders.price}`}</span>
                                <span className="order-time">{orders.day}</span>
                            </li>
                        )
                        })}

                    </ul>
                    <div className='section-header justify-content-between d-flex w-100'>
                        <div style={{fontSize: 20, fontWeight: 600}}>Total Earnings</div>
                        <div>$198</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PreviousOrders;
