import { useEffect, useState } from "react";

const LandingPage = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(fullName, email, message);
    setFullName('');
    setEmail('');
    setMessage('');
  }

    return (
        <div>
            landing page
        </div>
    );
};

export default LandingPage;

