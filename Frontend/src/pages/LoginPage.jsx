import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    // Temporary fake login until backend is ready
    if (email === "test@test.com" && password === "1234") {
      navigate("/home");
    } else {
      setError("Wrong email or password");
    }
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Welcome back to Relatio</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error && <div className="login-error">{error}</div>}

        <button type="submit">Login</button>

        <div className="login-footer">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </div>
        
      </form>
    </main>
  );
}

export default LoginPage;