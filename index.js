console.log("Hello World");
let button = document.getElementById('btn1');
button.addEventListener('click', function() {
    //console.log("Clicked");
    var one ='button';
    var two ='clicked';
    var three = one + '' + two;
    console.log(three);
    document.getElementById('main').innerHTML = three;
}
);


const button2 = document.querySelector('.btn2');
const text = document.querySelector('.text');

button2.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
   if(button2.innerHTML === 'Read Less'){
         button2.innerHTML = 'Read More';
    }
    else{
        button2.innerHTML = 'Read Less';
    }
}
);
