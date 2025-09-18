
// Cách để nhận dữ liệu từ người dùng

// 1. Cách dễ = Sử dụng window Prompt
// 2. Cách khó = HTML Textbõx


// Sử dụng window Prompt
let username;

username = window.prompt("What's your username: ");

console.log(`Your name is ${username}`)

// HTML Textbox
let username1;
document.getElementById("mySubmit").onclick = function(){
    username1 = document.getElementById("myText").value;
    document.getElementById("Slogan").textContent = `Hello ${username1}`;
}