// page loader
window.onload = function(){ document.getElementById("loading").style.display = "none" }


// Back To Top

let bttb = document.getElementById("bttb");

bttb.addEventListener("click", function () {
    // console.log("You have clicked");
    // this.scrollTo == 0;
    window.scrollTo({
        top: 0
    });
});


function scrollIt(){
    if(scrollY > 1500){
        document.getElementById('bttb').style.display = 'block';
    }else if(scrollY < 1500){
        document.getElementById('bttb').style.display = 'none';
    }else{
        console.log('have a problem!');
    }
}


// Menu 

const close = document.getElementById("close");
const menu = document.getElementById("menu");
const navList = document.getElementById("navlist");
const navFirst = document.getElementById("nav-first");

menu.addEventListener("click", () => {
    document.body.classList.add("active");
    navList.style.left = "0";
});

close.addEventListener("click", () => {
    document.body.classList.remove("active");
    navList.style.left = "-100vw";
});

navList.addEventListener('click', function (e) {
    if (e.target.id != 'nav-first') {
        document.body.classList.remove("active");
        navList.style.left = "-100vw";
    }
});


// Portfolio Redirect

let cardTitle = document.getElementsByClassName('card-title');
let cardImage = document.getElementsByClassName('card-image');
let cardBtn = document.getElementsByClassName('card-button');
let cardBtnIndex = document.getElementsByClassName('card-button');
let image = ['personal.jpg', 'school.jpg', 'the-celebrity.jpg', 'trust-family.jpg', 'post-type.jpg'];
let title = ['Personal', 'School', 'The celebrity', 'Trust family', 'Social post type'];


for (i = 0; i < cardImage.length; i++) {
    var img = document.createElement('img');
    cardImage[i].appendChild(img).setAttribute('src', `images/${image[i]}`);
}

for (i = 0; i < cardBtn.length; i++) {
    cardTitle[i].innerText = title[i];
}



cardBtn[0].addEventListener('click', function (e) {
    if (e.target.className == 'card-button') {
        window.location.href = `./portfolio/${title[0]}/index.html`;
    }
});

cardBtn[1].addEventListener('click', function (e) {
    if (e.target.className == 'card-button') {
        window.location.href = `./portfolio/${title[1]}/index.html`;
    }
});

cardBtn[2].addEventListener('click', function (e) {
    if (e.target.className == 'card-button') {
        window.location.href = `./portfolio/${title[2]}/index.html`;
    }
});

cardBtn[3].addEventListener('click', function (e) {
    if (e.target.className == 'card-button') {
        window.location.href = `./portfolio/${title[3]}/index.html`;
    }
});

cardBtn[4].addEventListener('click', function (e) {
    if (e.target.className == 'card-button') {
        window.location.href = `./portfolio/${title[4]}/index.html`;
    }
});



const submit = document.getElementById('submit');
const active = document.getElementById('active');
const message = document.getElementById('message');
const body = document.getElementById('body');

submit.addEventListener('click', () => {
    active.style.display = "block";
    body.style.overflow = "hidden";
    message.style = "opacity: 1; top: 50%;";
    message.innerHTML = "<h4>Contact form is not in working right now.</h4>";
});


// AOS = Animation On Scroll 

AOS.init();





//hero gloov

var gloov = document.getElementById('gloov');
var timeX = 0.1;

setInterval(function () {
    var x = "rotate(" + timeX + "deg)";
    gloov.style.transform = x;
    timeX+= 0.1;
}, 100);


