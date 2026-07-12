function Contact() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Have a question or want to share feedback? Use this page to learn what PlantCare can do for your home garden.
            </p>
          </div>

          <div className="contact-grid" style={{ gap: 24 }}>
            <div className="glass-card" style={{ flex: 1 }}>
              <h3>Support</h3>
              <p>
                For issues, ideas, or help converting your plant care workflow into a React app, reach out here.
              </p>
              <ul>
                <li>Email: support@plantcare.example</li>
                <li>Phone: +1 234 567 890</li>
                <li>Office: Greenhouse Lab, Suite 12</li>
              </ul>
            </div>

            <div className="glass-card" style={{ flex: 1 }}>
              <h3>Send a message</h3>
              <form className="form-card">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="textarea" rows="6" placeholder="Tell us about your plant care needs" />
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
