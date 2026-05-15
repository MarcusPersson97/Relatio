import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "./SignupPage.css";

function SignupPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    async function handleSignup(event) {
        event.preventDefault();

        setError("");

        const result = await registerUser(username, email, password);

        if (result.success) {
            navigate("/login");
        } else {
            setError(result.messsage);
        }

        // if (!username || !email || !password) {
        //    setError("Please fill in all fields");
        //    return;
        //}

        // Temp. mock signup untill backend is ready
        // console.log("Siggnup data:", {
        //    username,
        //    email,
        //    password,
        // });

        // alert("account create successfully!");
        // navigate("/login")
    }

    return (
        <main className="signup-page">
            <form className="signup-card" onSubmit={handleSignup}>
                <h1>Sign up</h1>
                <p>Create your Relatio account</p>

                <label>Username</label>
                <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                />

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
                placeholder="Create password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                />

                {error && <div className="signup-error">{error}</div>}
                
                <button type="submit">Create account</button>

                <div className="signup-footer">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </div>
            </form>
        </main>
    );
}

export default SignupPage;