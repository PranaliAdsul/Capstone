import React, { useState } from 'react';
import './DonationForm.css'

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
const [state, setState] = useState('');
const [pincode, setPincode] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [foodDescription, setFoodDescription] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };
  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
  };

  const handleFoodDescriptionChange = (event) => {
    setFoodDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Donation amount: ${amount}`);
    console.log(`Donor name: ${name}`);
    console.log(`Donor email: ${email}`);
    console.log(`Donor phone: ${phone}`);
    console.log(`Donor address: ${address}`);
    console.log(`Preferred pickup date: ${pickupDate}`);
    console.log(`Food description: ${foodDescription}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Food Quantity:</label>
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
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
      </div>
      <div>
  <label htmlFor="address">Address:</label>
  <textarea id="address" value={address} onChange={handleAddressChange} required></textarea>
</div>
<div>
  <label htmlFor="city">City:</label>
  <input type="text" id="city" value={city} onChange={handleCityChange} required />
</div>
<div>
  <label htmlFor="state">State:</label>
  <input type="text" id="state" value={state} onChange={handleStateChange} required />
</div>
<div>
  <label htmlFor="pincode">Pincode:</label>
  <input type="text" id="pincode" value={pincode} onChange={handlePincodeChange} required />
</div>

      <div>
        <label htmlFor ="pickup-date">Preferred pickup date:</label>
        <input type="date" id="pickup-date" value={pickupDate} onChange={handlePickupDateChange} required />
      </div>
      <div>
        <label htmlFor="food-description">Food description:</label>
        <textarea id="food-description" value={foodDescription} onChange={handleFoodDescriptionChange} required></textarea>
      </div>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
