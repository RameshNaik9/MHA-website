document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.getElementById("navlinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-200px";
    }

    document.querySelector(".fa-bars").addEventListener("click", showMenu);
    document.querySelector(".fa-times").addEventListener("click", hideMenu);
});

/**
 * Stores selected answers from the form into localStorage
 */
function storeAngerAnswers() {
    let answers = JSON.parse(localStorage.getItem("anger_answers")) || {};

    document.querySelectorAll("#anger-test input[type='radio']:checked").forEach((radio) => {
        answers[radio.name] = parseInt(radio.value);
    });

    localStorage.setItem("anger_answers", JSON.stringify(answers));
}

/**
 * Moves to the next question set and stores responses
 */
function submitAngerTest() {
    storeAngerAnswers();
    window.location.href = "/anger_2"; // Redirect to the next part of the test
}

/**
 * Moves from anger_2 to anger_3 while storing answers
 */
function submitAngerTestPart2() {
    storeAngerAnswers();
    window.location.href = "/anger_3"; // Redirect to the final part of the test
}

/**
 * Submits all answers to the backend API at the final step
 */
function submitFinalAngerTest() {
    storeAngerAnswers();
    let answers = JSON.parse(localStorage.getItem("anger_answers"));

    fetch("/api/save-response", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ responses: answers })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Submission Successful:", data);
            localStorage.removeItem("anger_answers"); // Clear storage after submission
            window.location.href = "/submit_anger"; // Redirect to results page
        })
        .catch(error => {
            console.error("Error submitting test:", error);
        });
}
