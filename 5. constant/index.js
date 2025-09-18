// Const có nghĩa là constant là biến có dữ liệu không bao giờ thay đổi

const pi = 3.14159;
let radius;
let dientich;




let myH1 ;
// 

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    dientich = 2 * pi * radius;
    myH1 = document.getElementById("myH1").textContent = `The result is ${dientich}`; 
}

