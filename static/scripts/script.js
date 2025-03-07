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
 * Calculates total score from stored answers
 */
function calculateAngerScore() {
    let answers = JSON.parse(localStorage.getItem("anger_answers")) || {};
    let totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    return totalScore;
}

/**
 * Handles submission from anger_1 and determines next step
 */
function submitAngerTest() {
    storeAngerAnswers();
    let totalScore = calculateAngerScore();

    if (totalScore < 10) {
        window.location.href = "/submit_anger";  // Directly submit
    } else {
        window.location.href = "/anger_2";  // Move to next section
    }
}

/**
 * Handles submission from anger_2 and determines next step
 */
function submitAngerTestPart2() {
    storeAngerAnswers();
    let totalScore = calculateAngerScore();

    if (totalScore < 20) {
        window.location.href = "/submit_anger";  // Submit if score is still low
    } else {
        window.location.href = "/anger_3";  // Move to final section
    }
}

/**
 * Final submission - Sends all stored answers to backend
 */
function submitFinalAngerTest() {
    let answers = JSON.parse(localStorage.getItem("anger_answers")) || {};
    let totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);

    fetch("/api/save-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "user@example.com",  // Change with actual user
            score: totalScore, 
            responses: answers 
        })
    }).then(response => response.json())
    .then(data => {
        console.log("Submission successful:", data);
        localStorage.removeItem("anger_answers");  // Clear after submission
        window.location.href = "/submit_anger"; // Redirect to results
    }).catch(error => console.error("Error:", error));
}
