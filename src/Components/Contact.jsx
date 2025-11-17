import React from 'react';


export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form>
        <div>
          <label>Name :</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message :</label>
          <textarea name="message" rows="5" />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
