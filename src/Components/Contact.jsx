import React from 'react'

export default function Contact() {
  return (
    <div>
      <h2>Contactez-nous</h2>
      <form>
        <div>
          <label>Name :</label>
          <input type="text" name="name"/>
          <label>Email :</label>
          <input type="email" name="email"/>
          <label>Message :</label>
          <textarea name="message"/>
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}
