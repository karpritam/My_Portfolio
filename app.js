var icon = document.getElementById("icon");
icon.onclick = function () {
	document.body.classList.toggle("light-theme");
	if (document.body.classList.contains("light-theme")) {
		icon.className = "fa-solid fa-moon";
	} else {
		icon.className = "fa-solid fa-sun";
	}
};

//---another process-----//

// let currMode = "root";

// icon.addEventListener("click", () => {
//     if (currMode === "root") {
//         currMode = "light-mode";
//         document.body.classList.add("light-theme"); // Add light theme class
//         icon.className = "fa-solid fa-moon"; // Change icon to moon
//     } else {
//         currMode = "root"; // Switch back to root mode
//         document.body.classList.remove("light-theme"); // Remove light theme class
//         icon.className = "fa-solid fa-sun"; // Change icon to sun
//     }
// });

// ---about section js-----
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
	for (tablink of tablinks) {
		tablink.classList.remove("active-link");
	}
	for (tabcontent of tabcontents) {
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}


// -----typed js------
const typed=new Typed('.multiple-text',{
    strings:['Software Development Engineer(SDE)'],
    // strings:['software engineer','fullstack developer'],
    typeSpeed: 70,
    // backSpeed:70,
    // backDelay: 1000,
    // loop:true,
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector(".back-to-top");
    const Myportfolio = document.querySelector("#Myportfolio");

    // Function to show/hide the back-to-top arrow
    function toggleBackToTop() {
        const MyportfolioPosition = Myportfolio.getBoundingClientRect();
        if (MyportfolioPosition.top <= window.innerHeight && MyportfolioPosition.bottom > 0) {
            backToTop.style.display = "flex"; // Show the arrow
        } else {
            backToTop.style.display = "none"; // Hide the arrow
        }
    }

    // Event listener for scrolling
    window.addEventListener("scroll", toggleBackToTop);
});
