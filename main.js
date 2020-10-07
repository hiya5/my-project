canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
Canvas = document.getelementbyid('mycanvas');
ctx = canvas.getcontext("2d")
var mouseevent ="empty";
var last_position_of_x,var last_position_of_y
colour = "black";
width_of_line = 1;
	canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    //addictonal activity start
    colour.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    //addictonal activity ends
mouseevent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
mouseevent="mouseup";
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
mouseevent="mouseleave";


