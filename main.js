var mouseevent="";

c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d");
color="black";
width=1;
radius=21;

c1.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("C").value;
    width=document.getElementById("W").value;
    radius=document.getElementById("R").value;
    mouseevent="mouseDown"
}

c1.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    endx=e.clientX-c1.offsetLeft;
    endy=e.clientY-c1.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(endx,endy,radius,0,2*Math.PI)
        ctx.stroke();
    }startx=endx;starty=endy;

}

c1.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";

}

c1.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
    
}

function wipe(){
    ctx.clearRect(0,0,c1.width,c1.height)
}
