import { useEffect, useState } from "react";
import lplogo from '../assets/landing-page-image.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LandingPage = () => {

    return (
        <div className="d-flex justify-content-center align-items-center" 
            style={{ background: '#EDFEFF', height: '100%',font:'Raleway' }}>
            <div style={{ width: '889px', background: '#EDFEFF' }}>
                <img src={lplogo} alt="" style={{ height:'100%', marginLeft:'156px' }} />

                <h1 style={{ textAlign: 'center', paddingRight: '20px',paddingTop: '20px', color:'#014E58', marginBottom:'2rem' }}>Yoga is the journey of the self,<br />through the self, to the self.</h1>

                <Button size="md" style={{borderRadius: '60px', background:'#014E58', color:'#00FF19', marginLeft: '24rem'}}>Watch Now</Button>

                <h1 style={{marginTop: '50px', textAlign: 'center', color:'#014E58'}}>About Us</h1>

                <div style={{marginTop: '20px', backgroundColor:'#EDFEFF', color:'#014E58', fontWeight:'bold'}}>
                    <p>Welcome to our yoga community, where we aim to provide a space for yoga enthusiasts of all levels to connect, learn, and share their practice.</p>

                    <p>Our website is designed to be an interactive platform where users can upload videos with yoga exercises, create personalized playlists, and engage with other members through commenting and rating videos.</p>

                    <p>We believe that yoga is not just a physical practice, but also a mental and spiritual one. Therefore, our platform is not only about sharing videos with poses, but also about exploring the many facets of yoga, such as meditation, breathing techniques, and mindfulness practices.</p>

                    <p>Whether you are a beginner or an experienced yogi, you will find a variety of videos on our website that cater to your needs and interests. Our community members are encouraged to share their knowledge, tips, and experiences with others, creating a supportive and inclusive environment.</p>

                    <p>You can create a profile, customize your settings, and start uploading videos with your own yoga exercises. You can also browse the videos uploaded by other members, create personalized playlists, and rate and comment on them. Our website offers a user-friendly interface that allows you to search for specific videos.</p>

                    <p>Join our yoga community today and start exploring the endless possibilities of your practice. Let's connect, learn, and grow together.</p>
                    
                    <p style={{textAlign:'center'}}>Namaste.</p>

                    <div style={{background: '#014E58', color: 'white', padding: '1rem', textAlign: 'center'}}>
                        <div style={{height:'363px',paddingLeft:'114px', paddingRight:'110px',paddingTop:'40px'}}>
                            <div style={{ textAlign:'left', fontSize:'32px' }}>
                                <span style={{display: 'inline-block', color:'#00FF19'}}>Serenity</span>
                                <span style={{display: 'inline-block'}}>Stream</span> 
                            </div>
                            <span style={{textAlign:'left', marginRight:'20rem',}}>Your yoga stream platform of excellence.</span>
                        </div>    
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

