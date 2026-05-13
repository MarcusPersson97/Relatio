import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../pages/HomePage.css";

function DashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="home-page">
            <aside className="sidebar">
                <h2 className="sidebar-logo">Relatio</h2>

                <nav className="sidebar-nav">
                    <button 
                        className={location.pathname === "/home" ? "active" : ""}
                        onClick={() => navigate("/home")}
                    >
                        Dashboard
                    </button>

                    <button
                        className={location.pathname === "/contacts" ? "active" : ""}
                        onClick={() => navigate("/contacts")}
                    >
                        Contacts
                    </button>

                    <button>Companies</button>
                    <button>Tasks</button>
                    <button>Notes</button>
                    <button>Calendar</button>
                </nav>

                <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
            </aside>

            <main className="dashboard">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;