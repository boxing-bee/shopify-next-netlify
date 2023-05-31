export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>"Where a passion for fighting meets fashion."</h2>
          <p>Benish Khan</p>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About Me</li>
            <li>Box It Out Mission</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Train with me!</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </section>
      </footer>
    </>
  );
}
