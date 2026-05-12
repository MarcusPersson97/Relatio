import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="home-page">
            <aside className="sidebar">
                <h2 className="sidebar-logo">Relatio</h2>

                <nav className="sidebar-nav">
                    <button>Dashboard</button>
                    <button>Contacts</button>
                    <button>Companies</button>
                    <button>Tasks</button>
                    <button>Notes</button>
                    <button>Calendar</button>
                </nav>

                <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
            </aside>

            <main className="dashboard">
                <div className="dashboard-header">
                    <h1>Welcome back</h1>
                    <p>Manage your CRM data from one place</p>
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

                        <p>No recent activity yet</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;