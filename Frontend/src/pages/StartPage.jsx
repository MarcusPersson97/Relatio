import { useNavigate } from "react-router-dom";
import "./StartPage.css";

function StartPage() {

  const navigate = useNavigate();

  return (
    <div className="start-page" id="home">
      <header className="navbar">
        <h1 className="logo">Relatio</h1>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="nav-button" onClick={() => navigate("/login")}>Login</button>
          <button className="signup-button">Sign up</button>
        </nav>
      </header>

      <main className="hero">
        <h2>Customer relationship management made simple</h2>
        <p>
          Relatio helps you organize contacts, companies, tasks and notes in one
          easy-to-use CRM system.
        </p>

        <div className="hero-buttons">
          <button className="primary-button" onClick={() => navigate("/login")}>Get started</button>
          <button className="secondary-button">Learn more</button>
        </div>
      </main>

      <section className="features" id="features">
        <h2>Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Contacts</h3>
            <p>Create and manage customer contacts.</p>
          </div>

          <div className="feature-card">
            <h3>Companies</h3>
            <p>Connect contacts to companies.</p>
          </div>

          <div className="feature-card">
            <h3>Tasks</h3>
            <p>Create tasks and keep track of work.</p>
          </div>

          <div className="feature-card">
            <h3>Notes</h3>
            <p>Add notes to remember important details.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Relatio</h2>
        <p>
          Relatio is a CRM application built to help users manage customer
          relationships in a simple and structured way.
        </p>
      </section>
    </div>
  );
}

export default StartPage;