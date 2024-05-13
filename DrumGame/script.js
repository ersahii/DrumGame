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
            console.log("I am btn", letter);
            break;
            case "3" : 
            console.log("I am btn", letter);
            break;
            case "4" : 
            console.log("I am btn", letter);
            break;
            case "5" : 
            console.log("I am btn", letter);
            break;
            case "6" : 
            console.log("I am btn", letter);
            break;
            default: 
            console.log("i am error");
        }
    })
}
