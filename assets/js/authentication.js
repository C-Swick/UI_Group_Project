//Hashing function
async function hashText(text) {
    const msgUint8 = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

//Handle Signup
async function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const hashedEmail = await hashText(email);
    const hashedPassword = await hashText(password);

    if (localStorage.getItem(hashedEmail)) {
        alert("User already exists. Try logging in.");
        return;
    }

    localStorage.setItem(hashedEmail, hashedPassword);
    console.log("Signup:", hashedEmail, hashedPassword);
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "login.html";
}

//Handle Login
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const hashedEmail = await hashText(email);
    const hashedPassword = await hashText(password);

    const storedPassword = localStorage.getItem(hashedEmail);

    if (storedPassword && storedPassword === hashedPassword) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", hashedEmail);
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }
}

//Handle Logged in vs. Logged out
window.addEventListener("DOMContentLoaded", () => {
    const authLink = document.getElementById("auth-link");
    if (!authLink) return;

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        authLink.textContent = "Log Out";
        authLink.href = "#";
        authLink.addEventListener("click", (e) => {
            e.preventDefault();
            const currentUser = localStorage.getItem("loggedInUser");
            if (currentUser) {
                localStorage.removeItem(`filters_${currentUser}`);
            }
            localStorage.removeItem("filters_guest");
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out.");
            window.location.reload();
        });
    } else {
        authLink.textContent = "Sign Up/Sign In";
        authLink.href = "login.html";
    }
});