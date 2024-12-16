var tablinks=document.querySelectorAll(".tab-links");
var tabcontents=document.querySelectorAll(".tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// let modebtn=document.querySelector("#theme-toggle");
// let currentmode="light";

// modebtn.addEventListener("click",()=>{
//     //console.log("you are trying to change");
//     if(currentmode=="light"){
//         currentmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currentmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currentmode);
// })

// -----typed js------
const typed=new Typed('.multiple-text',{
    strings:['Software Development Engineer(SDE)'],
    // strings:['software engineer','fullstack developer','artist'],
    typeSpeed: 70,
    // backSpeed:70,
    // backDelay: 1000,
    // loop:true,
});


// ------side menu-------
var sidemenu=document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

//--for message---


