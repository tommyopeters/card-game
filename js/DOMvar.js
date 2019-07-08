let gameDiv = document.getElementById('game');

let container = document.querySelectorAll('.cardcontainer');

for(let i=0; i<container.length; i++){
    let content = container[i];
    content.addEventListener('click', ()=>{
        content.classList.toggle('flipped');
    })
};

let htmlCard = `
        <div class="cardcontainer">
        <div class="front">
            <div class="top">
                <span>&spades;</span>
            </div>
            <h1>A</h1>
            <div class="bottom">
                <span class="upside-down">&spades;</span>
            </div>
        </div>
        <div class="back"><div class="back-inner"></div></div>
        </div>
    `;




//FADE OUT FUNCTION
function fadeOut(selector, speed, target=selector){
    var s = document.querySelector(`${selector}`).style;
    s.opacity = 1;

    document.querySelector(`${target}`).addEventListener('click', ()=>{
        s.opacity = 1;
        (function fade(){(s.opacity-=.01)<0?s.display="none":setTimeout(fade, speed)})();
    })
};

function shakeIt(selector,speed, target=selector){
    var s = document.querySelector(`${selector}`);
    s.style.removeProperty('opacity');

    

    document.querySelector(`${target}`).addEventListener('click', ()=>{
        if(s.classList.contains('zoomin')){s.classList.remove('zoomin');}
        s.classList.add('apply-shake');

        s.addEventListener("animationend", (e) => {
            s.classList.remove("apply-shake");
        })
    })
}

let amountbet = 0;

let pokerchips = document.querySelectorAll('.pokerchip');
    for(let i=0; i<pokerchips.length; i++){
        pokerchips[i].addEventListener('click', ()=>{
            
            if(pokerchips[i].classList.contains('white')){
                amountbet+=1;
                if(amountbet>500){amountbet=500};
                document.getElementById('amount').innerHTML = amountbet;
            }
            if(pokerchips[i].classList.contains('red')){
                amountbet+=5;
                if(amountbet>500){amountbet=500};
                document.getElementById('amount').innerHTML = amountbet;
            }
            if(pokerchips[i].classList.contains('blue')){
                amountbet+=10;
                if(amountbet>500){amountbet=500};
                document.getElementById('amount').innerHTML = amountbet;
            }
            if(pokerchips[i].classList.contains('green')){
                amountbet+=25;
                if(amountbet>500){amountbet=500};
                document.getElementById('amount').innerHTML = amountbet;
            }
            if(pokerchips[i].classList.contains('black')){
                amountbet+=100;
                if(amountbet>500){amountbet=500};
                document.getElementById('amount').innerHTML = amountbet;
            }

        })
    }




