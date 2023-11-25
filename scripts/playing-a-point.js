

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
    let playerWeapon = isGamerWeapon();  // >>>>>>>>>>   ToDo    <<<<<<<<<<<
    let computerWeapon = iscomputerWeapon(mySessionObject.computer.character);
    const result1 = await removeCountingHandClass();
    console.log(result1);
    const result2 = await addCountingHandClass();
    console.log(result2);
    const result3 = await createTimeDelay();
    console.log(result3);
    const result4 = await showBattlingHands();
    console.log(result4);
    const result5 = await decideWinnerAndUpdateScore();
    console.log(result5); 
    const result6 = await switchBothHandsToRock();
    console.log(result6);



  
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


    

function createTimeDelay(){
  return new Promise(resolve => {
    setTimeout(() => {
        resolve('enough time has lapsed for hands to count 1-2-3');
    }, 3000);
});  
}
        




function decideWinnerAndUpdateScore(response){
    return new Promise(resolve => {
      let playerCurrentWeapon = mySessionObject.player.currentWeapon;
      let computerCurrentWeapon = mySessionObject.computer.currentWeapon;

      if (playerCurrentWeapon.includes("/r") && computerCurrentWeapon.inludes("/s")){
        playerWinsThePoint();
      }
      if (playerCurrentWeapon.includes("/r") && computerCurrentWeapon.includes("/p")){
        computerWinsThePoint();
      }
      if(playerCurrentWeapon.includes("/p") && computerCurrentWeapon.includes("/r")){
        playerWinsThePoint()
      }
      if(playerCurrentWeapon.includes("/p") && computerCurrentWeapon.includes("/s")){
        computerWinsThePoint()
      }
      if(playerCurrentWeapon.includes("/s") && computerCurrentWeapon.includes("/p")){
        playerWinsThePoint()
      }
      if(playerCurrentWeapon.includes("/s") && computerCurrentWeapon.includes("/r")){
        computerWinsThePoint()
      }
      else{
        nobodyWinsThePoint()
      }  
    resolve("winner of the point has been determined and score has been updated");
  });


    


    /* check if someone has won the set and/or the match */

    /* communicate if som */

};


function playerWinsThePoint(){

  

};

function computerWinsThePoint(){

};

function nobodyWinsThePoint(){

};


function switchBothHandsToRock(){
  return new Promise(resolve => {
    setTimeout(() => {
        document.querySelector("#battling-hand-left").src = mySessionObject.player.currentRockWeapon;
        document.querySelector("#battling-hand-right").src = mySessionObject.computer.currentRockWeapon;
        resolve('both hands have switch back to rock-weapon');
    }, 0);
});  
}









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