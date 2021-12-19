function  move_img(str) {
    var step=10; 
    switch(str){
    case "down":
    var x=document.getElementById('img1').offsetTop;
    x= x + step;
    document.getElementById('img1').style.top= x + "px";
    break;
    
    case "up":
    var x=document.getElementById('img1').offsetTop;
    x= x -step;
    document.getElementById('img1').style.top= x + "px";
    break;
    
    case "left":
    var y=document.getElementById('img1').offsetLeft;
    y= y - step;
    document.getElementById('img1').style.left= y + "px";
    break;
    
    case "right":
    var y=document.getElementById('img1').offsetLeft;
    y= y + step;
    document.getElementById('img1').style.left= y + "px";
    break;
    }
    }
    