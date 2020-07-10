let view = document.getElementById("view-button");
let close = document.getElementById("close-button");
let robot = document.getElementById("robot");

let open = function() {
    robot.style.display = 'block';
    close.style.display = 'block';
};

let hide = function() {
    robot.style.display = 'none';
    close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

let textChange = function() {
    view.innerHTML = "Hello! I'm Ozzy.";
};

let textReturn = function() {
    view.innerHTML = "Click Here!";
}

/*  EventTarget.addEventListener('string' , eventHandlerFUnction */

view.addEventListener('click',textChange);
close.addEventListener('click', textReturn);