
const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const label = document.getElementById("myNumber");
let count = 0;

increase.onclick = function () {
    count++;
    label.textContent = count;
    console.log('tuong tac duoc increase');

}

decrease.onclick = function () {
    count --;
    label.textContent = count;
}

reset.onclick = function () {
    count =0 ;
    label.textContent = count;
}
