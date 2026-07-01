// Pages
const pages = document.querySelectorAll(".page");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtn = document.getElementById("nextBtn");

function showPage(index){

    pages.forEach(page=>page.classList.remove("active"));

    pages[index].classList.add("active");

}

// Continue
startBtn.addEventListener("click",()=>{

    showPage(1);

});

// Yes
yesBtn.addEventListener("click",()=>{

    showPage(2);

});

// Flower -> Letter
nextBtn.addEventListener("click",()=>{

    showPage(3);

});


// No Button Run Away
noBtn.addEventListener("mouseenter",()=>{

    let x=Math.random()*250-125;

    let y=Math.random()*180-90;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

});

noBtn.addEventListener("click",()=>{

    let x=Math.random()*250-125;

    let y=Math.random()*180-90;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

});


// Floating Hearts

const hearts=document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,250);
// -----------------------------
// YES BUTTON EFFECT
// -----------------------------

yesBtn.addEventListener("click", () => {

    document.body.style.background =
        "linear-gradient(135deg,#ffd1dc,#fff5f8)";

    createConfetti();

});


// -----------------------------
// CONFETTI
// -----------------------------

function createConfetti(){

    for(let i=0;i<120;i++){

        const conf=document.createElement("div");

        conf.style.position="fixed";

        conf.style.left=Math.random()*100+"vw";

        conf.style.top="-20px";

        conf.style.width="8px";

        conf.style.height="8px";

        conf.style.borderRadius="50%";

        conf.style.background=
        `hsl(${Math.random()*360},100%,70%)`;

        conf.style.zIndex="999";

        conf.style.transition="4s linear";

        document.body.appendChild(conf);

        setTimeout(()=>{

            conf.style.top="110vh";

            conf.style.transform=
            `translateX(${Math.random()*300-150}px)
            rotate(720deg)`;

        },50);

        setTimeout(()=>{

            conf.remove();

        },4500);

    }

}



// -----------------------------
// BOUNCE BEAR
// -----------------------------

const bears=document.querySelectorAll(".bear");

setInterval(()=>{

    bears.forEach(b=>{

        b.animate([

            {transform:"translateY(0px)"},

            {transform:"translateY(-15px)"},

            {transform:"translateY(0px)"}

        ],{

            duration:700

        });

    });

},2000);




// -----------------------------
// BUTTON RIPPLE
// -----------------------------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",e=>{

const ripple=document.createElement("span");

ripple.style.position="absolute";

ripple.style.width="20px";

ripple.style.height="20px";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.6)";

ripple.style.left=e.offsetX+"px";

ripple.style.top=e.offsetY+"px";

ripple.style.transform="translate(-50%,-50%)";

ripple.style.animation="ripple .6s linear";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});




// -----------------------------
// LETTER TYPING EFFECT
// -----------------------------

const letter=document.querySelector(".letter p");

const fullText=letter.innerText;

letter.innerText="";

function typeLetter(){

let i=0;

const timer=setInterval(()=>{

letter.innerHTML+=fullText.charAt(i);

i++;

if(i>=fullText.length){

clearInterval(timer);

}

},45);

}

nextBtn.addEventListener("click",()=>{

setTimeout(typeLetter,300);

});
// ==========================
// FLOWER RAIN
// ==========================

function flowerRain(){

for(let i=0;i<35;i++){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
(4+Math.random()*5)+"s";

flower.style.fontSize=
(20+Math.random()*20)+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

}



// ==========================
// YES CLICK
// ==========================

yesBtn.addEventListener("click",()=>{

flowerRain();

});




// ==========================
// PAGE TRANSITION
// ==========================

function switchPage(current,next){

pages[current].classList.add("fadeOut");

setTimeout(()=>{

pages[current].classList.remove("active");

pages[current].classList.remove("fadeOut");

pages[next].classList.add("active");

pages[next].classList.add("fadeIn");

setTimeout(()=>{

pages[next].classList.remove("fadeIn");

},600);

},500);

}




startBtn.onclick=()=>{

switchPage(0,1);

}



yesBtn.onclick=()=>{

flowerRain();

createConfetti();

switchPage(1,2);

}



nextBtn.onclick=()=>{

switchPage(2,3);

}




// ==========================
// AUTO HEARTS
// ==========================

setInterval(()=>{

createHeart();

createHeart();

},500);




// ==========================
// RANDOM BACKGROUND
// ==========================

const colors=[

"#ffd6e7",
"#ffeaf2",
"#fff0f6",
"#ffe4ec"

];

setInterval(()=>{

document.body.style.background=

`linear-gradient(135deg,

${colors[Math.floor(Math.random()*colors.length)]},

#fff5f8)`;

},7000);




// ==========================
// TITLE EFFECT
// ==========================

let emoji=0;

const titles=[

"❤️ For You ❤️",
"💕 Love 💕",
"🌸 Valentine 🌸",
"💌 My Love 💌"

];

setInterval(()=>{

document.title=titles[emoji];

emoji++;

if(emoji>=titles.length){

emoji=0;

}

},1500);