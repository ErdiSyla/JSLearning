function greeting(){
    console.log('Hello');
}

/* greeting();

const num = 2;

const function1 = function(){
    console.log('Hello World');
}

console.log(function1);
function1();

const object = {
    num: 2,
    fun : function(){
        console.log('Hello 3');
    }
};

object.fun(); 

function display (param){
    console.log(param);
}

display(2);

function run(param){
    param();
}

run(function() {
    console.log('hello4')
});

setTimeout(function() {
    console.log('timeout');
    console.log('timeout 2')
}, 3000);

console.log('next line');

setInterval(function() {
    console.log('interval');
}, 3000);

console.log('next line 2');

[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach((value, index) => {
    if(value == 'wash dishes'){
        return;
    }
    console.log(index);
    console.log(value);
});

const arrowFunction = () => {
    console.log('Hello');
}

arrowFunction();

const object2 = {
    method: () => {

    },
    method() {

    }
}*/

const clickElem = document.querySelector('.click');

const eventListener = () => {
    console.log('click');
}

clickElem.addEventListener('click', eventListener);

clickElem.removeEventListener('click', eventListener);

clickElem.addEventListener('click', () => {
    console.log('click2');
});