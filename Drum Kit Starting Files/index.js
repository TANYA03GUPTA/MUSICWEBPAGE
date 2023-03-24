var numberofDRumBtns= document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDRumBtns;i++)
     document.querySelectorAll("button")[i].addEventListener("click", function(){
        console.log(this);
        this.style.borderColor="red";
        this.style.color="white";
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        
     });

//key
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


     //sound
function makesound(key){
    switch(key){
        case 'w':
            var audion= new Audio("sounds/tom-1.mp3");
            audion.play();
            break;
        case 'a':
           var audion= new Audio("sounds/tom-2.mp3");
           audion.play();
           break;
        case 's':
              var audion= new Audio("sounds/tom-3.mp3");
              audion.play();
              break;
        case 'd':
                var audion= new Audio("sounds/tom-4.mp3");
                audion.play();
                break;
        case 'j':
               var audion= new Audio("sounds/crash.mp3");
               audion.play();
               break;
        case 'k':
               var audion= new Audio("sounds/snare.mp3");
               audion.play();
               break;    
        case 'l':
             var audion= new Audio("sounds/kick-bass.mp3");
             audion.play();
             break;                                         
    }  
}
//animation: 
function buttonAnimation(currentKey){
    var activeButton =document.querySelector("." + currentKey);  //currentKey is just a single character and we need to concatenate a full stop in addition to the currentKey
    activeButton.classList.add("pressed");  
    
    //We add this method that can remove animation after 100 MS
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },
    100
    );
    }