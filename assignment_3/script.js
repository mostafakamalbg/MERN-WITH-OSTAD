"use strict";

function digitalClock(){
    let date=new Date();
    let hours =date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();
    if(hours=='12'){
        let hr=12;
    }else if(hours=='24'){
        let hr=0;
    }else{
        let hr=hours%12;
    }
    if(hours<10){
        hours="0"+hours
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    if(seconds<10){
        seconds="0"+seconds
    }
    let ampm=hours<12?"AM":"PM";
    let time =hours+":"+minutes+":"+seconds+""+ampm;
    document.getElementById('Clock').innerHTML=time;
    
}
    setInterval(digitalClock, 1000);
