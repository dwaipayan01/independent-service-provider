import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {

    const { id, name, picture } = props.service;
    const navigate = useNavigate();
    const handleBook = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div>
            <div className="display text-center">
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <button onClick={() => handleBook(id)} className="btn btn-primary">Book now</button>
            </div>
        </div>
    );
};

export default Service;