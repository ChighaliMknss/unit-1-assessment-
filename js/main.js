var result = 0;

var addBtn = document.getElementById('plus');
var subBtn = document.getElementById('minus');
var counter = document.getElementById('counter');
var input = document.querySelector('input');

addBtn.addEventListener('click', function() {
    if(isNaN(parseInt(input.value))) return
    result += parseInt(input.value)
    display()});
    subBtn.addEventListener('click', function() {
        if(isNaN(parseInt(input.value))) return
        result -= parseInt(input.value)
        display()});
display()
function display() {
    counter.textContent = result;
}