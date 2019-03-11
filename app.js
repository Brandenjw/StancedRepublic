function revealTime() {
    var date = new Date();
    //these following variables speak to time each element runs(h=23,m=59,s=59)
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
// the idea is for the clock to essentially use the if statement to fall in line with correct timing
    if (h == 0){
        h = 12;
    }
    else if(h > 12){
        h = h - 12;
        session = "PM";
    }



    var time = h + ":" + m + ":" + s;
    document.querySelector("#clockdisplay").innerHTML= time;
   
    }
revealTime();
