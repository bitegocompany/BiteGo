/* =========================
   BiteGo v4 JavaScript
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





    let warning =
    document.getElementById("warning");





    if(username === ""){


        warning.style.display="block";


        return;

    }



    warning.style.display="none";





    const loginData = {


        username: username,




        time:
        new Date().toLocaleString(),


        source:
        "BiteGo Website"


    };





    showSuccess();





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
   Search Animation
========================= */


const searchWords = [

"🍔 המבורגר",

"🍕 פיצה",

"🍣 סושי",

"🥗 סלט",

"☕ קפה",

"🍝 פסטה",

"🍟 אוכל מהיר"

];



let searchIndex = 0;



function changeSearchText(){


    const searchInput =
    document.getElementById("foodSearch");



    if(!searchInput)
    return;




    searchInput.value =
    searchWords[searchIndex];



    searchIndex++;



    if(searchIndex >= searchWords.length){

        searchIndex = 0;

    }


}





setInterval(

changeSearchText,

2000

);



changeSearchText();









/* =========================
   Popular Tags Click
========================= */


document
.querySelectorAll(".popular-tags span")
.forEach(tag=>{


    tag.addEventListener(

    "click",

    ()=>{


        const searchInput =
        document.getElementById("foodSearch");



        if(searchInput){


            searchInput.value =
            tag.innerText;


        }


    });


});









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
"BiteGo v4 Loaded 🚀"
);
