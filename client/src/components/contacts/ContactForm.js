import { useState, useEffect } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contact)
    setContact({ name: '', email: '', message: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='name' 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value})}
          required
          placeholder="Name"
        />
        <input 
        name='email' 
        value={contact.email}
        onChange={(e) => setContact({...contact, email: e.target.value})}
        required
        placeholder="Enter email"
      />
        <label>Message:</label>
        <textarea
          name='message'
          value={contact.message}
          onChange={(e) => setContact({...contact, message: e.target.value})}
          required
          placeholder="Your Message"
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;