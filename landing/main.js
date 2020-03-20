function scrolled(){
    pos = window.scrollY;
    if(pos>15){
        minimizeHeader()
    }
    else{
        maximizeHeader();
        
        
    }
}

function minimizeHeader(){
    document.getElementById('header').style.height = "50px";
    document.getElementById('header-nav').style.top = "50px";
    document.getElementById('head-t').style.fontSize = "12pt";


}

function maximizeHeader(){
    document.getElementById('header').style.height = "80px";
   document.getElementById('header-nav').style.top = "80px";
   document.getElementById('head-t').style.fontSize = "24pt";


}