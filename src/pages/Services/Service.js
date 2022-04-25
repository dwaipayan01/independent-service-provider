import React from 'react';
import "./Service.css"

const Service = (props) => {
    const { name, picture } = props.service;
    return (
        <div>
            <div className="display text-center">
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <button className="btn btn-primary">Book now</button>
            </div>
        </div>
    );
};

export default Service;