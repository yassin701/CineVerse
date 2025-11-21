import { useState , useEffect } from 'react';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const handleSubmit = (e) =>{
      e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required !");
      setSuccess(""); 
      return;
    }else if (!emailRegex.test(email)) {
      setError("Invalid email format !");
      setSuccess("");
    return;
    }
    setError("");
    setSuccess("Message sent successfully !");
     setTimeout(() => {
      setError("");
      setSuccess("");
      setEmail("");
      setName("");
      setMessage("");
    }, 3000);
  }



  return (
    <div className='contact'>
      <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form>
        <div>
          <label>Name :</label>
          <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Email :</label>
          <input type="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Message :</label>
          <textarea  value={message} rows="5"  onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Send</button>
        </div>
      </form>
       {error && <p style={{ color: "red" }}>{error}</p>}
       {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
    </div>
    
  );
}
