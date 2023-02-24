import { useEffect, useState } from "react";
import lplogo from '../assets/landing-page-image.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LandingPage = () => {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ background: '#EDFEFF', height: '62vh' }}>
            <div style={{ width: '600px', background: '#EDFEFF' }}>
                <img src={lplogo} alt="" style={{ width: '100%' }} />

                <h1 style={{ textAlign: 'left', paddingRight: '20px',paddingTop: '20px', color:'#014E58', marginBottom:'2rem' }}>Yoga is the journey of the self, through the self, to the self.</h1>

                <Button size="md" style={{borderRadius: '60px', background:'#014E58', color:'#00FF19'}}>Watch Now</Button>

                <h1 style={{marginTop: '50px', textAlign: 'center', color:'#014E58'}}>About Us</h1>
                <h4></h4>
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default LandingPage;

