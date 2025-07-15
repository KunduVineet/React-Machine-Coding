import React, {useState} from "react";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [jwt, setJwt] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password }),

            });
            const data = await response.json();
            if (response.ok) {
                console.log(data);
                setJwt(data.jwtToken);
                setMessage("Login successful!");
            } else {
                setMessage(data.message || "Login failed.");
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            {jwt && <p>Your JWT: {jwt}</p>}
        </div>
    );
}

export default Login;