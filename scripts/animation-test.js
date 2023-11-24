

// =======================================================================
// Playing A Point
// =======================================================================


const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));

/* sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(mySessionObject)); */
 

const triggerAnimationBtn = document.querySelector("#trigger-animation-button");

triggerAnimationBtn.addEventListener("click", () =>{   
    playAPoint();
});
    


async function playAPoint(){
    
    console.log("started to play a point");
    const result1 = await removeCountingHandClass();
    console.log(result1);
    const result2 = await addCountingHandClass();
    console.log(result2);

  
}




function removeCountingHandClass(){

  return new Promise(resolve => {
      let countingHandClassHasBeenRemoved = false;
      while(countingHandClassHasBeenRemoved === false){
          countingHandClassHasBeenRemoved = setTimeout(hasCountingHandClassBeenRemoved(),500);
          let battlingHandLeft = document.querySelector("#battling-hand-left");
          battlingHandLeft.classList.remove("counting-hand");
          let battlingHandRight = document.querySelector("#battling-hand-right");
          battlingHandRight.classList.remove("counting-hand");
      }
      resolve("removal of counting-hand class has been completed");
    });
};
  


function hasCountingHandClassBeenRemoved (){
  let countingHands = document.querySelectorAll(".counting-hand");
  console.log(countingHands);
  if(countingHands === null){
      return true;
  } else {
      return false;
  }
};

  

function addCountingHandClass(){
    
    return new Promise(resolve => {
        setTimeout(() => {
            let battlingHandLeft = document.querySelector("#battling-hand-left");
            let battlingHandRight = document.querySelector("#battling-hand-right");
            battlingHandLeft.classList.add("counting-hand");
            battlingHandRight.classList.add("counting-hand");  
            resolve('addition of counting-hand class has been initiated');
        }, 0);
    });  
};


    


        


function computerChoosesHand(response){

     /* use random function to decide the chosen hand by the computer */

    return response;      
};


function decideWinnerAndUpdateScore(response){

        /* determine who won the point */
        /* update the score */

    /* check if someone has won the set and/or the match */

    /* communicate if som */

    return response;
};











/* Example code */
/* async function calculateResults(){
    try {
        const response = await result(80)
        console.log("Results received")
        const finalgrade = await grade(response)
         console.log(finalgrade)
        }

    catch(err){
            console.log(err)
        }
}

calculateResults() */



 

/* async function playAPoint(){

    try {
        const countingHandClassRemoved = await removeCountingHandClass(countingHandClassAdded);
        alert("Has removeCountingHandClass been executed? "+ countingHandClassRemoved);
        const countingHandClassAdded = await addCountingHandClass();
        const computerHasChosenHand = await computerChoosesHand(countingHandClassRemoved);
        const winnerDecidedAndScoreUpdated = await decideWinnerAndUpdateScore(computerHasChosenHand);
        }

    catch(err){
            alert(err)
        }
}; */




/* alert("Counting-hand class has been added: "+response); */
    /* console.log("Counting-hand class has been added: "+response); */
    /* return response; */


    /* let battlingHands = document.querySelectorAll(".battling-hand"); 
    battlingHands.forEach(element =>{
        element.classList.add("counting-hand"); 
    }); */


    
   

    /* alert("Counting-hand class has been removed: "+response); */
    /*  console.log("Counting-hand class has been removed: "+response); */
    /* return response; */


  /* let countingHands = document.querySelectorAll(".counting-hand"); 
        countingHands.forEach(element =>{
            element.classList.remove("counting-hand"); 
        }); */



        

  /* ----------------------------------------------------------------------- */ 
  /* async function asyncCall() {
    console.log('calling');
    const result2 = await resolveAfter4Seconds();
    console.log(result2);
    const result1 = await resolveAfter2Seconds();
    console.log(result1);
  }
  
  
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('2 seconds');
      }, 2000);
    });
  }
  function resolveAfter4Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('4 seconds');
      }, 4000);
    });
  }
  
 
  asyncCall();
  console.log('test'); */
  /* ----------------------------------------------------------------------- */


/* function addCountingHandClass2(){
    
    return new Promise(resolve => {
            let battlingHandLeft = document.querySelector("#battling-hand-left");
            let battlingHandRight = document.querySelector("#battling-hand-right");
            battlingHandLeft.classList.add("counting-hand");
            battlingHandRight.classList.add("counting-hand");  
            resolve('addition of counting-hand class has been initiated');
    });  
}; */


/* function removeCountingHandClass2(){

    return new Promise(resolve => {
        setTimeout(() => {
            let battlingHandLeft = document.querySelector("#battling-hand-left");
            battlingHandLeft.classList.remove("counting-hand");
            let battlingHandRight = document.querySelector("#battling-hand-right");
            battlingHandRight.classList.remove("counting-hand");
          resolve("removal of counting-hand class has been initiated");
        }, 2000);
      });
    ;
}; */