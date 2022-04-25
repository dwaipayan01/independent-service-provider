import React from 'react';
import picture1 from "../../images/dj7.webp";
import picture2 from "../../images/dj8.webp";
import picture3 from "../../images/dj9.webp";
import picture4 from "../../images/dj10.webp";
import picture5 from "../../images/dj11.webp";
import picture6 from "../../images/dj12.webp";
import Service from './Service';
import "./Services.css";

const Services = () => {
    const services = [
        { id: 1, name: "Booking Tickets", picture: picture1 },
        { id: 2, name: "Planning Tours", picture: picture2 },
        { id: 3, name: "Documents", picture: picture3 },
        { id: 4, name: "Travel Insurance", picture: picture4 },
        { id: 5, name: "Booking Hotels", picture: picture5 },
        { id: 6, name: "Transport", picture: picture6 }
    ]
    return (
        <div>
            <h3 className="text-danger text-center mt-5">My <span className="text-primary text-center">Services</span></h3>
            <div className="display-one container mt-3">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;