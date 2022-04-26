import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className=" d-flex justify-content-center ">
                <p><BsInstagram className='ms-5  w-100 icon-one rounded-circle'></BsInstagram></p>
                <p><AiFillLinkedin className='ms-5  w-100 icon-one rounded-circle'></AiFillLinkedin></p>
                <p><AiOutlineTwitter className='ms-5 w-100 icon-one rounded-circle'></AiOutlineTwitter></p>
                <p><AiOutlineFacebook className='ms-5 w-100 icon-one rounded-circle'></AiOutlineFacebook></p>
                <p></p>
            </div>
            <p className='text-center ms-5'>2022 Travel, All rights reserved.</p>
        </div>
    );
};

export default Footer;