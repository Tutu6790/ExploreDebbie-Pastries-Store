alert('Welcome to ExploreDebbie Pastries Store!! Here, we create delicious memories');
var name = prompt('Please enter your name:')
if (name === "") {
    var names = prompt('please you\'ll have to enter your name');
    alert(`Hello ${names}, Welcome to ExploreDebbie Pastries store! I hope you find what you're looking for.`)
} else {
    alert(`Hello ${name}, Welcome to ExploreDebbie Pastries store! I hope you find what you're looking for. `)
}

document.getElementById('name').innerHTML = name;

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function  init() {
    
    setTimeout(() => {
        loader.style.opaciy = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
        
    }, 5000);
}

init();