import React from 'react';
import { ImPriceTag } from 'react-icons/im';
import "./Destination.css";

const Destination = (props) => {
    const { name, picture, price, place } = props.destination;
    return (
        <div>
            <div className="image-container ">
                <img src={picture} alt="" />


            </div>
            <div className="d-flex justify-content-between me-3">
                <h4>{name}</h4>
                <p><ImPriceTag ></ImPriceTag> <span className='text-warning'>${price}</span></p>
            </div>
            <p>{place}</p>
        </div>
    );
};

export default Destination;