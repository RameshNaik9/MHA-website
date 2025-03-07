// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });


// document.addEventListener("DOMContentLoaded", function(){
//         // Get the next button element
//         var nextButton = document.querySelector("button[type='next_A']");
//         console.log('hello');
//         // Add click event listener to the next button
//         nextButton.addEventListener("click", function() {
//         // Get the selected options and calculate the total marks
//         var totalMarks = calculateTotalMarks();
//         // Determine the next page based on the total marks
//         var nextPage = determineNextPage(totalMarks_A);
//         // Redirect to the next page
//         window.location.href = nextPage;
//     });
// });
// function util(){
//     var totalMarks_A = calculateTotalMarks();    
//     // Determine the next page based on the total marks
//     var nextPage = determineNextPage(totalMarks_A);
//     // Redirect to the next page
//     window.location.href = nextPage;
// }
// function calculateTotalMarks() {
//     // Initialize total marks
//     var totalMarks_A = 0;
//     // Iterate through all radio buttons
//     var radioButtons = document.querySelectorAll("input[type='radio']");
//     radioButtons.forEach(function(radioButton) {
//         if (radioButton.checked) {
//             // Add marks based on selected option's value
//             totalMarks_A += parseInt(radioButton.value);
//         }
//     });
//     return totalMarks_A;
// }
// function determineNextPage(totalMarks_A) 
// {
//     if (totalMarks_A < 15) {
//         return "set_B1.html";
//     } else {
//         return "set_B2.html";
//     }
// }


// document.addEventListener("DOMContentLoaded", function(){
//     var nextButton = document.querySelector("button[type='next_B']");
//     console.log('hello');
//     nextButton.addEventListener("click", function() {
//     var totalMarks = calculateTotalMarks1();
//     var nextPage = determineNextPage1(totalMarks_A);
//     window.location.href = nextPage;
// });
// });
// function utilb1(){
// var totalMarks_A = calculateTotalMarks1();    
// var nextPage = determineNextPage1(totalMarks_A);
// window.location.href = nextPage;
// }

// function calculateTotalMarks1() {
// var totalMarks = 0;
// var radioButtons = document.querySelectorAll("input[type='radio']");
// radioButtons.forEach(function(radioButton) {
//     if (radioButton.checked) {
//         totalMarks += parseInt(radioButton.value);
//     }
// });
// return totalMarks;
// }


// function determineNextPage1(totalMarks) 
// {
//     if (totalMarks < 20)
//     {
//         return "set_C1.html";
//     }
//      else  ( totalMarks>= 20) 
//      {
//         return "set_C2.html";
//      }
// }

// document.addEventListener("DOMContentLoaded", function(){
//     var nextButton = document.querySelector("button[type='next_B']");
//     console.log('hello');
//     nextButton.addEventListener("click", function() {
//     // Get the selected options and calculate the total marks
//     var totalMarks = calculateTotalMarks2();
//     // Determine the next page based on the total marks
//     var nextPage = determineNextPage1(totalMarks_A);
//     // Redirect to the next page
//     window.location.href = nextPage;
// });
// });
// function utilb2(){
// var totalMarks_A = calculateTotalMarks2();    
// // Determine the next page based on the total marks
// var nextPage = determineNextPage2(totalMarks_A);
// // Redirect to the next page
// window.location.href = nextPage;
// }
// function calculateTotalMarks2() {
// // Initialize total marks
// var totalMarks = 0;
// // Iterate through all radio buttons
// var radioButtons = document.querySelectorAll("input[type='radio']");
// radioButtons.forEach(function(radioButton) {
//     if (radioButton.checked) {
//         // Add marks based on selected option's value
//         totalMarks += parseInt(radioButton.value);
//     }
// });
// return totalMarks;
// }
 
// function determineNextPage2(totalMarks) 
// {
//     if (totalMarks < 15)
//     {
//         return "set_C2.html";
//     }
//      else  ( totalMarks>= 15) 
//      {
//         return "set_C3.html";
//      }
// }

// // Function to get the source page from the URL query parameters
// function getSourcePage() {
//     // Get the source page from local storage
//     var sourcePage = localStorage.getItem("sourcePage");
//     if (!sourcePage) {
//         return "default_source_page.html";
//     }
    
//     return sourcePage;
// }


// // Function to navigate back to set_B1
// function navigateToSetB1() {
//     window.location.href = "set_B1.html";
// }

// // Function to navigate back to set_B2
// function navigateToSetB2() {
//     window.location.href = "set_B2.html";
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var beforeButton = document.querySelector("button[type='before']");
//     var previousMarks = sessionStorage.getItem('previousMarks');

//     if (previousMarks) {
//         beforeButton.setAttribute('href', previousMarks);
//     }

//     beforeButton.addEventListener("click", function() {
//         var totalMarks = sessionStorage.getItem('totalMarks'); 
//         window.location.href = totalMarks;
//     });
// });

// //academic stress page

// document.addEventListener("DOMContentLoaded", function(){
//     // Get the next button element
//     var nextButton = document.querySelector("button[type='next_as']");
//     console.log('hello');
//     // Add click event listener to the next button
//     nextButton.addEventListener("click", function() {
//     // Get the selected options and calculate the total marks
//     var totalMarks = calculateTotalMarks_as();
//     // Determine the next page based on the total marks
//     var nextPage = determineNextPage_as(totalMarks_A);
//     // Redirect to the next page
//     window.location.href = nextPage;
// });
// });
// function util_as(){
// var totalMarks_A = calculateTotalMarks_as();    
// // Determine the next page based on the total marks
// var nextPage = determineNextPage_as(totalMarks_A);
// // Redirect to the next page
// window.location.href = nextPage;
// }
// function calculateTotalMarks_as() {
// // Initialize total marks
// var totalMarks_A = 0;
// // Iterate through all radio buttons
// var radioButtons = document.querySelectorAll("input[type='radio']");
// radioButtons.forEach(function(radioButton) {
//     if (radioButton.checked) {
//         // Add marks based on selected option's value
//         totalMarks_A += parseInt(radioButton.value);
//     }
// });
// return totalMarks_A;
// }
// function determineNextPage_as(totalMarks_A) 
// {
// if (totalMarks_A < 15) {
//     return "set_B1-AS.html";
// } else {
//     return "set_B2-AS.html";
// }
// }

// document.addEventListener("DOMContentLoaded", function(){
// var nextButton = document.querySelector("button[type='next_B1_as']");
// console.log('hello');
// nextButton.addEventListener("click", function() {
// var totalMarks = calculateTotalMarksasb1();
// var nextPage = determineNextPageasb1(totalMarks_A);
// window.location.href = nextPage;
// });
// });
// function utilb1_as(){
// var totalMarks_A = calculateTotalMarksasb1();    
// var nextPage = determineNextPageasb1(totalMarks_A);
// window.location.href = nextPage;
// }

// function calculateTotalMarksasb1() {
// var totalMarks = 0;
// var radioButtons = document.querySelectorAll("input[type='radio']");
// radioButtons.forEach(function(radioButton) {
// if (radioButton.checked) {
//     totalMarks += parseInt(radioButton.value);
// }
// });
// return totalMarks;
// }


// function determineNextPageasb1(totalMarks) 
// {
// if (totalMarks < 20)
// {
//     return "set_C1-AS.html";
// }
//  else  ( totalMarks>= 20) 
//  {
//     return "set_C2-AS.html";
//  }
// }

// document.addEventListener("DOMContentLoaded", function(){
// var nextButton = document.querySelector("button[type='next_B2_as']");
// console.log('hello');
// nextButton.addEventListener("click", function() {
// // Get the selected options and calculate the total marks
// var totalMarks = calculateTotalMarksasb2();
// // Determine the next page based on the total marks
// var nextPage = determineNextPageasb2(totalMarks_A);
// // Redirect to the next page
// window.location.href = nextPage;
// });
// });
// function utilb2_as(){
// var totalMarks_A = calculateTotalMarksasb2();    
// // Determine the next page based on the total marks
// var nextPage = determineNextPageasb2(totalMarks_A);
// // Redirect to the next page
// window.location.href = nextPage;
// }
// function calculateTotalMarksasb2() {
// // Initialize total marks
// var totalMarks = 0;
// // Iterate through all radio buttons
// var radioButtons = document.querySelectorAll("input[type='radio']");
// radioButtons.forEach(function(radioButton) {
// if (radioButton.checked) {
//     // Add marks based on selected option's value
//     totalMarks += parseInt(radioButton.value);
// }
// });
// return totalMarks;
// }

// function determineNextPageasb2(totalMarks) 
// {
// if (totalMarks < 15)
// {
//     return "set_C2-AS.html";
// }
//  else  ( totalMarks>= 15) 
//  {
//     return "set_C3-AS.html";
//  }
// }

document.addEventListener("DOMContentLoaded", function(){
    var navLinks = document.getElementById("navlinks");

    function showMenu(){
        navLinks.style.right = "0";
    }

    function hideMenu(){
        navLinks.style.right = "-200px";
    }

    document.querySelector(".fa-bars").addEventListener("click", showMenu);
    document.querySelector(".fa-times").addEventListener("click", hideMenu);
});



