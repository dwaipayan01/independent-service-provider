import React from 'react';
import picture from '../../images/dj5.jpg';


const About = () => {
    return (
        <div className="container">
            <h3 className='text-center mt-5'>My goal</h3>
            <div>
                <img className="rounded mx-auto d-block mt-3 " src={picture} alt="" />
                <h3 className="text-center mt-5">Name : Dwaipayan Dash</h3>
                <p className="text-center">In future I want to be a full stack developer.If I find proper guidlines I am sure I will be good web developer.I know the jounary will be very difficult.But I worked hard to be a developer.</p>
            </div>

        </div>
    );
};

export default About;