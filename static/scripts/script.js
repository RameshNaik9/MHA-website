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
 * Submits the test, stores answers, and redirects to the next test.
 * @param {string} testType - "anger" or "academic_stress"
 */
function submitTest(testType) {
    let answers = {};

    document.querySelectorAll("input[type='radio']:checked").forEach((radio) => {
        answers[radio.name] = radio.value;
    });

    // Store answers in localStorage
    localStorage.setItem(testType + "_answers", JSON.stringify(answers));

    // Determine next page based on test type
    let nextPage = "";
    if (testType === "anger") {
        nextPage = "/set_B1"; // Adjust based on your Flask routes
    } else if (testType === "academic_stress") {
        nextPage = "/set_B1-AS";
    }

    // Redirect to next test page
    window.location.href = nextPage;
}


