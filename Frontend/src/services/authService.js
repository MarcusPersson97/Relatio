export async function loginUser(email, password) {
    // Temporary mock login until backend is ready

    if (email === "test@test.com" && password === "1234") {
        return {
            success: true,
            token: "fake-jwt-token",
            user: {
                email: email,
                name: "Test user",
            },
        };
    }

    return {
        success: false,
        message: "Invalid email or password",
    };
}