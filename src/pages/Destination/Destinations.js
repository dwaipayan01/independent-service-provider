import React from 'react';
import picture1 from "../../images/dj14.jpg";
import picture2 from "../../images/dj15.jpg";
import picture3 from "../../images/dj16.jpg";
import picture4 from "../../images/dj17.jpg";
import picture5 from "../../images/dj18.webp";
import picture6 from "../../images/dj19.webp";
import Destination from './Destination';
import "./Destinations.css";

const Destinations = () => {
    const destinations = [
        { id: 1, name: "Timang Beach", price: 1800, place: "Yogyakarta, Indonesia", picture: picture1 },
        { id: 2, name: "Temple", price: 2200, place: "Kyoto, Japan", picture: picture2 },
        { id: 3, name: "Nice building", price: 3200, place: "Bali, Indonesia", picture: picture3 },
        { id: 4, name: "Forest", price: 1000, place: "Sylhet,Bangladesh", picture: picture4 },
        { id: 5, name: "Beach", price: 1300, place: "Sreemangal, Bangladesh", picture: picture5 },
        { id: 6, name: "Walkway", price: 2800, place: "Delhi, India", picture: picture6 }
    ]
    return (
        <div>
            <h3 className='text-danger mt-5 text-center'>Vacations <span className="text-primary">destinations</span></h3>
            <div className="display-two ms-4">
                {
                    destinations.map(destination => <Destination key={destination.id} destination={destination}></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;