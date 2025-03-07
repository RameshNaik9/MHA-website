document.addEventListener("DOMContentLoaded", function() {
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
 * Stores answers and moves to next set
 */
function submitAngerTest() {
    let answers = JSON.parse(localStorage.getItem("anger_answers")) || {};
    
    document.querySelectorAll("#anger-test input[type='radio']:checked").forEach((radio) => {
        answers[radio.name] = parseInt(radio.value);
    });

    localStorage.setItem("anger_answers", JSON.stringify(answers));
    window.location.href = "/anger_2";  // Redirect to anger_2.html
}

/**
 * Final Submission - Store in Database via API
 */
function submitFinalTest() {
    let answers = JSON.parse(localStorage.getItem("anger_answers"));
    
    fetch("/api/save-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "test@example.com", 
            responses: answers
        })
    }).then(response => response.json())
    .then(data => {
        console.log("Submission successful:", data);
        window.location.href = "/submit"; // Redirect to submission page
    }).catch(error => console.error("Error:", error));
}
