


const triggerAnimationBtn = document.querySelector("#trigger-animation-button");


triggerAnimationBtn.addEventListener("click", () =>{
    countingHands();
});

function countingHands (){
    const battlingHands = document.querySelectorAll(".battling-hand");  
    /* If any element is member of the "counting-hand" class, remove the class?  */
    if(!(battlingHands === 0)){
        for(let i = 0; i < battlingHands.length; i++){
            battlingHands[i].classList.remove("counting-hand");
        }    
    }
    /* Add the "counting-hand" class (with the counting-animation) to all elements who are members of the "battling-hand" class. This will trigger the animation*/
    for(let i = 0; i < battlingHands.length; i++){
        battlingHands[i].classList.add("counting-hand");
    }
    /* use random function to decide the chosen hand by the computer */

    /* determine who won the point */

    /* update the score */

    /* check if someone has won the set and/or the match */

    /* communicate if som */

}



/* battlingHands or another class name that has been put on the two battling hands - jpg.files   */

