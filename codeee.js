const form = document.getElementById("myyform");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const Username = document.getElementById("username").value;

    const Email = document.getElementById("email").value;

    const Password = document.getElementById("password").value;

    let text = "";

    if (Username.length < 5) {

        text = "Username must be at least 5 characters long.";

        document.getElementById("errors").innerHTML = text;

        return;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {

        text = "Please enter a valid email address.";

        document.getElementById("errors").innerHTML = text;

        return;
    }

    else if (Password.length <= 12) {

        text = "Password must be longer than 12 characters.";

        document.getElementById("errors").innerHTML = text;

        return;
    }

    else if (!/[!@#$%^&*(),.?":{}|<>_\-]/.test(Password)) {

        text = "Password must contain at least one special symbol.";

        document.getElementById("errors").innerHTML = text;

        return;
    }

    else {

        document.getElementById("errors").innerHTML = "";

        alert("Form submitted successfully!");

    }

}); 