const colors = ["red","green","tomato","orange","yellow","blue","black"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const color_name = document.getElementById('color_name');

btn.addEventListener("click", function(){
    const colr = getRandomNumber()
    
    document.body.style.backgroundColor = colors[colr];
    color_name.style.color = colors[colr];
    color.textContent = colors[colr];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
