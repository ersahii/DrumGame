var Allbtns = document.querySelectorAll("button");
for( let i = 0 ; i<Allbtns.length; i++){
    Allbtns[i].addEventListener("click" ,function(){
        var letter = this.innerHTML
        switch(letter){
            case "1" : 
            var audioElement = new Audio("sounds/tom.mp3");
            audioElement.play();
            break;
            case "2" : 
            var audioElement = new Audio("sounds/tom.mp3");
            audioElement.play();
            break;
            case "3" : 
            var audioElement = new Audio("sounds/tom.mp3");
            audioElement.play();
            break;
            case "4" : 
            var audioElement = new Audio("sounds/tom.mp3");
            audioElement.play();
            break;
            case "5" : 
            var audioElement = new Audio("sounds/tom.mp3");
            audioElement.play();
            break;
            case "6" : 
            var audioElement = new Audio("sounds/tom.mp3");
            audioElement.play();
            break;
            default: 
            console.log("i am error");
        }
    })
}
