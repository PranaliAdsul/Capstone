import React from 'react';
import DonationForm from './DonationForm';

function DonatePage() {
  const handleDonationSubmit = (data) => {
    // Handle donation submission
  };

  return (
    <div>
      <h1>Donate</h1>
      <p>Please fill out the form below to make a donation.</p>
      <DonationForm onSubmit={handleDonationSubmit} />
    </div>
  );
}

export default DonatePage;
