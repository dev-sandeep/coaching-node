import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';

export const Product = (props) => {
  const dispatch = useDispatch();
  
  const addToCartHandler = ()=>{
    dispatch(addToCart({
      id: Date.now(),
      qty: 1
    }));
  }
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={addToCartHandler}>Add to cart</button>
            </div>
            <small className="text-muted">$ <b>{props.price}</b></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;