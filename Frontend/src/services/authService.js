const API_URL = "https://relatio-fcw8.onrender.com/api/auth";

export async function loginUser(email,password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        return {
            success: response.ok,
            message: data.message,
            user: data.userInfo,
            token: data.token,
        };
    } catch (error) {
        return {
            success: false,
            message: "Could not connect to the server. Please try again later.",
            user: null,
            token: null,
        };
    }
}

export async function registerUser(username, email, password) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        return {
            success: response.ok,
            message: data.message,
            user: data.userInfo,
        };
    } catch (error) {
        return {
            success: false,
            message: "Could not connect to server. Please try again later.",
            user: null,
        };
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}