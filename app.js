var icon = document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.className="fa-solid fa-sun";
    }else{
        icon.className="fa-solid fa-moon";
    }
}

//---another process-----//

// let currMode = "root";

// icon.addEventListener("click", () => {
//     if (currMode === "root") {
//         currMode = "dark-mode"; 
//         document.body.classList.add("dark-theme"); // Add dark theme class
//         icon.className = "fa-solid fa-sun"; // Change icon to sun
//     } else {
//         currMode = "root"; // Switch back to root mode
//         document.body.classList.remove("dark-theme"); // Remove dark theme class
//         icon.className = "fa-solid fa-moon"; // Change icon to moon
//     }
// });
