import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Donation amount: ${amount}`);
    console.log(`Donor name: ${name}`);
    console.log(`Donor email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Donation amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} required />
      </div>
      <div>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="email">Your email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="message">Message (optional):</label>
        <textarea id="message" value={message} onChange={handleMessageChange} />
      </div>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
