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

/* IMPORTANT - for this to work, the page needs to  have following as the first script-connection in your html-file*/
/* <script src="/scripts/main.js" defer></script> */
/* Check if the commonSessionObject has been created. If not, create it*/
const testSessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));
if(testSessionObject === null){
    sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(testSessionObject));
}
/* Get the commonSessionObject and parse it to a javascript-object */
const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));



/* ================================================== */
/* OBJECTS from HTML file */ 
/* ================================================== */

const savePlayerInfoAndGoToChoosePlayerPageButton = document.querySelector("#button-savePlayerInfoAndGoToChoosePlayerPage");




/* ================================================== */
/* EVENT LISTENERS  */ 
/* ================================================== */

savePlayerInfoAndGoToChoosePlayerPageButton.addEventListener("click", function(event){

    const email = document.querySelector("#input-email").value;
    const nickName = document.querySelector("#input-nickName").value;
    const numberOfRounds = document.querySelector("#select-numberOfRounds").value;

    if(!isEmailValid(email)){
        alert("The email address is not valid. Please try again.")
        return;
    }
    if(!isNickNameValid(nickName)){
        alert("Nick names may only contain upper- or lower-case letters. Please try again.")
        return;
    }
    if(!isNumberOfRoundsValid(numberOfRounds)){
        alert("You must choose a number of rounds. Please try again.")
        return;
    }
    
    mySessionObject.player.email = email;
    mySessionObject.player.nickName = nickName;
    mySessionObject.score.numberOfRounds = parseInt(numberOfRounds);
    sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(mySessionObject));
    /* checkSessionStorage(); */
    window.location.href = "/htmls/choosePlayerBackup.html";
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


function isNumberOfRoundsValid(numberOfRounds){
    if(numberOfRounds == null || numberOfRounds == 0){
        return false;
    } else{
        return true;
    }
}



/* ================================================== */
/* OTHER CODE */ 
/* ================================================== */


function checkSessionStorage(){
    return new Promise(resolve => {
        setTimeout(() => {
            const mySessionObject2 = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));
            alert("retrieved object from sessionStorage: "+mySessionObject2.player.email+" "+mySessionObject2.player.nickName+" "+mySessionObject2.score.numberOfRounds);
            resolve('sessionStorage contents');
        }, 2000);
    });  
};

