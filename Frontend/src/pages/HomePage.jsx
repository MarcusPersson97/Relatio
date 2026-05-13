import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="dashboard-header">
        <h1>Welcome back</h1>
        <p>Manage your CRM data from one place.</p>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Contacts</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Companies</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Tasks</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Notes</h3>
          <p>0</p>
        </div>
      </section>

      <section className="recent-section">
        <div className="recent-card">
          <h3>Recent activity</h3>
          <p>No recent activity yet.</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;