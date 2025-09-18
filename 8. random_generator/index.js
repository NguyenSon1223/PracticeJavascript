let randomNum0 = Math.random() * 6; 

// Có nghĩa rằng là Math.random() * 6 chỉ được random từ số 0 đến số 6

let randomNum1 = Math.floor(Math.random() * 10000);

// Tại vì random sẽ không có số nguyên mà có thể sẽ ra nhiều số thập phân khác nhau



const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 20;
 

let randomNum;

myButton.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}


