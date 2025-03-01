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
