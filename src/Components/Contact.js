import React from 'react'

function Contact() {
  return (
    <div>Contact
    
    <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact me today to discuss your project and goals!</p>
        <a href="#" className="cta-button">Get in Touch</a>
      </section>
    </div>
  )
}

export default Contact