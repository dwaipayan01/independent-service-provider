import React from 'react';
import { Carousel } from 'react-bootstrap';
import picture1 from "../../images/dj4.jpg";
import picture2 from "../../images/dj2.webp"
import picture3 from "../../images/dj3.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Best place to travel</h3>
                        <p>Hire me without any hesitation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best place to travel</h3>
                        <p>Hire me without any hesitation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best place to travel</h3>
                        <p>Hire me without any hesitation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;