function call(){
    var text=document.getElementById("speak").value;
    x=speechSynthesis;
    x.speak(new SpeechSynthesisUtterance());
    x.speak(new SpeechSynthesisUtterance(text));
    text.value="";
}
