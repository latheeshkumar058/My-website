const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    if (username === "") {
        message.textContent = "Please enter your username.";
        return;
    }

    message.textContent =
        "Demo only: Your form was submitted, " + username + "!";

    form.reset();
});