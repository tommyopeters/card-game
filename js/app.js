let container = document.querySelectorAll('.card-container');

for(let i=0; i<container.length; i++){
    let content = container[i];
    content.addEventListener('click', ()=>{
        content.classList.toggle('flipped');
    })
}

