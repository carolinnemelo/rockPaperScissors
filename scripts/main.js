/* ================================================== */
/* READ-ME */
/* ================================================== */
/* JS-File Structure: 
   - set global objects
   - set global variables 
   - other code

   Coding rules:
   - variable- & object-names must be directly understandable to all developers  
   
   Developers:
   - Abdihakim   
   - Carolinne   
   - Hans-Olov     
   - Noor  
   
/* ================================================== */   
/* INSTRUCTIONS
/* ================================================== */   
/* To do (1) and (3), write the two lines of code below in the js-file that belongs to the respective page:

1. Get the data of the commonSessionObject and store it in mySessionObject
2. Update mySessionObject with new/current data
3. Upload the data in mySessionObject into the commonSessionObject in sessionStorage

const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));
sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(mySessionObject));
*/



/* ================================================== */
/* Set GLOBAL OBJECTS */ 
/* ================================================== */


let commonSessionObject = {
    player: {
        email: "",
        nickName: "",
        numberOfSets: 0,
        chosenCharacter: "",  /* Smelly Cat, Skellington or Mystery Human */
    },
    score: {
        playerPointsInSet1: 0,
        computerPointsInSet1: 0,
        playerPointsInSet2: 0,
        computerPointsInSet2: 0,
        playerPointsInSet3: 0,
        computerPointsInSet3: 0,
        playerPointsInSet4: 0,
        computerPointsInSet4: 0,
        playerPointsInSet5: 0,
        computerPointsInSet5: 0, 
        currentSetNumber: 1,
        playerPointsInCurrentSet: 0,
        computerPointsInCurrentSet: 0,
    }   
}

 
/* ================================================== */
/* Set GLOBAL VARIABLES */ 
/* ================================================== */





/* ================================================== */
/* OTHER CODE  */ 
/* ================================================== */

/* sets/updates the values of the above defined commonSessionObject into commmonSessionObjectInSS in sessionStorage */
sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(commonSessionObject));






