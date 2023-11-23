
/* ================================================== */
/* TO-DO*/
/* ================================================== */
/* 1. Check with Abdihakim and change url in the following line:  window.location.href = "/rps/htmls/hob-test2.html"; */



/* ================================================== */
/* READ-ME */
/* ================================================== */
/* JS-File Structure: 
   - objects from sessionStorage
   - objects from HTML file
   - event-listeners 
   - functions
   - other code

   Coding rules:
   - variable- & object-names must be directly understandable to all developers     

/* ================================================== */
/* OBJECTS from sessionStorage */ 
/* ================================================== */

/* Get the data from commonSessionObjectInSS that exists in sessionStorage */
const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));


/* ================================================== */
/* OBJECTS from HTML file */ 
/* ================================================== */

/* Get the button from exists in the html file */
const savePlayerInfoAndGoToChoosePlayerPageButton = document.querySelector("#button-savePlayerInfoAndGoToChoosePlayerPage");




/* ================================================== */
/* EVENT LISTENERS  */ 
/* ================================================== */

savePlayerInfoAndGoToChoosePlayerPageButton.addEventListener("click", function(event){

    const email = document.querySelector("#input-email").value;
    const nickName = document.querySelector("#input-nickName").value;
    const numberOfSets = document.querySelector("#select-numberOfSets").value;
    
    if(!isEmailValid(email)){
        alert("The email address is not valid. Please try again.")
        return;
    }
    if(!isNickNameValid(nickName)){
        alert("Nick names may only contain upper- or lower-case letters. Please try again.")
        return;
    }
    if(!isNumberOfSetsValid(numberOfSets)){
        alert("You must choose 1, 3 or 5 sets. Please try again.")
        return;
    }
    /* alert("kör eventlistener-funktionen"); */
    mySessionObject.player.email = email;
    mySessionObject.player.nickName = nickName;
    mySessionObject.player.numberOfSets = numberOfSets;
    sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(mySessionObject));
    window.location.href = "/rps/htmls/hob-test2.html";
});





/* ================================================== */
/* FUNCTIONS  */ 
/* ================================================== */

function isEmailValid (email){
    if(email==null){
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);           /* function returns true or false */
}
    /* The emailRegex above says the following: */
    /* any number of lower-case a-z or upper-case letters A-Z or any numbers 0-9 or any of the characters ._%+-  */
    /* + = there needs to be one or more of the aforementioned characters */
    /* there needs to be exactly one @-sign */
    /* any lower-case a-z or upper-case A-Z or any numbers 0-9 or any of the characters .-  */
    /* + = there needs be one or more of the aforementioned characters  */
    /* there needs to be a dot */
    /* any lower-case a-z or any uppper-case A-Z */
    /* {2,} = there needs to be two or more of the aforementioned characters */


function isNickNameValid(nickName){
    if(nickName == null){
        return false;
    } else{
        const nickNameRegex = /^[a-zA-Z-]+$/;
        return nickNameRegex.test(nickName);
    }
}


function isNumberOfSetsValid(numberOfSets){
    if(numberOfSets == null || numberOfSets == 0){
        return false;
    } else{
        return true;
    }
}



/* ================================================== */
/* OTHER CODE */ 
/* ================================================== */








