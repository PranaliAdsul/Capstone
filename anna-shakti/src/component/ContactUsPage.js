import React from 'react';

function ContactUsPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or comments, please feel free to reach out to us using the form below:</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" rows="5" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
