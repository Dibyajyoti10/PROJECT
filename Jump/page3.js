score=0;
cross=true;
audio = new Audio('bg.mp3') //background music
audiogo = new Audio('gameover.mp3') //gameover
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    console.log("Key code is: ",e.keyCode)
    if (e.keyCode==38) {
        student = document.querySelector('.student')
        student.classList.add('animate')
        setTimeout(()=>{
            student.classList.remove('animate')
        },500);
    }
    if (e.keyCode==39) {
        student = document.querySelector('.student')
        studentX = parseInt(window.getComputedStyle(student,null).getPropertyValue('left'));
        student.style.left= studentX + 115 +'px'
    }
    if (e.keyCode==37) {
        student = document.querySelector('.student')
        studentX = parseInt(window.getComputedStyle(student,null).getPropertyValue('left'));
        student.style.left= (studentX - 115) +'px'
    }
}
setInterval(()=>{
    student= document.querySelector('.student');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(student, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(student, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    if(offsetX<80 && offsetY<50){
       // gameover.innerHTML= "Oopps!! You have taken Admission, now suffer"
        gameover.innerHTML= "Oopps!! Game Over"

        gameover.style.visibility='visible'
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross =true;
        },1000);
        setTimeout(() => {
            anidur= parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = anidur - 2.0;
        obstacle.style.animationDuration = newDur +'s', 
        console.log("Animation speed:", newDur)
        }, 500);
        
    }
},10);
function updateScore(score){
    scoreCont.innerHTML = "your score =" + score
}