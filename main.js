canvas = document.getElementById("draw");
var last_x, last_y;
var mouseEvent = "empty";
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", downmouse);
function downmouse(e) {
    color = document.getElementById("set_color").value;
    linewidth = document.getElementById("set_linewidth").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", upmouse);
function upmouse(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", leavemouse);
function leavemouse(e) {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", movemouse);
function movemouse(e) {
    var current_mouseX = e.clientX - canvas.offsetLeft;
    current_mouseY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("x =" + current_mouseX + "y =" + current_mouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_mouseX, current_mouseY);
        ctx.stroke();
    }
    last_x = current_mouseX;
    last_y = current_mouseY;
}
var last_touch_x, last_touch_y;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if(width < 992) {
    document.getElementById("draw").width = new_width;
    document.getElementById("draw").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchStart", my_touchStart);
function my_touchStart(e) {
    color = document.getElementById("set_color").value;
    lineWidth = document.getElementById("set_linewidth").value;
    last_touch_x = e.touches[0].clientX - offsetLeft;
    last_touch_y = e.touches[0].clientY - offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    var current_touchX = e.touches[0].clientX - canvas.offsetLeft;
    current_touchY = e.touches[0].clientY - canvas.offsetTop;
        console.log("x =" + current_touchX + "y =" + current_touchY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.moveTo(last_touch_x, last_touch_y);
        ctx.lineTo(current_touchX, current_touchY);
        ctx.stroke();
    last_touch_x = current_touchX;
    last_touch_y = current_touchY;
}
function clear_paint() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}







