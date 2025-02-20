const hole = document.getElementById("hole");
const obstacle= document.getElementById("obstacle");
const bird = document.getElementById("bird");

let score = 0;

hole.addEventListener("animationiteration",()=>{
    let rand = Math.random() * (500-150);
    hole.style.top = rand + "px";

    score++;
});

setInterval(function(){
    let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if(!isJumping){
        bird.style.top = birdTop + 3 + "px";
    }

    let obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));

    if(birdTop > 480 || (obstacleLeft < 20 && (birdTop > holeTop + 150 || birdTop < holeTop))){
        alert(`Game Over. your score: ${score}`);
         bird.style.top = 100 +"px";
         obstacle.style.left = "100%";
         hole.style.left = "100%";
         score = 0 ;
    }
}, 10)

let isJumping = false;

document.addEventListener("click",()=>{
    isJumping = true;
    let jumpTimer = 0;

    let jumpInterval = setInterval(function(){
        jumpTimer++;
        let birdTop =  parseInt(getComputedStyle(bird).getPropertyValue("top"));
        if (birdTop > 0 && jumpTimer < 15){
             bird.style.top = birdTop - 5 + "px";
        }
        if (jumpTimer > 20){
            clearInterval(jumpInterval);
            isJumping = false;
            jumpTimer = 0;
        }
    }, 10);
});