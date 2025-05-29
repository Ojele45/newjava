//methods

// let str = "hello, javascript World"
// let name = "sfdivbhsdifbvi"
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt());
// console.log(str.indexOf(" "));
// console.log(str.includes("hello"));
// console.log(str.slice(0,4))
// console.log(str.split(" "));
// console.log(str.trim());
// console.log(str.replace("hello", "hi"));
// console.log(str+name)

//number method

// let numo = 42.678
// let strnum = "86.997"
// console.log(numo);
// console.log(numo.toString());
// console.log(numo.toFixed(2));
// console.log(parseInt(strnum));
// console.log(parseFloat(strnum));
// console.log(isNaN("wsrf"));

// maths methods

// console.log(Math.PI.toFixed(2));
// console.log(Math.round(41.9795));
// console.log(Math.floor(41.9609));
// console.log(Math.ceil(42.1));
// console.log(Math.max(12, 31,45))
// console.log(Math.min(75,34,23))
// console.log(Math.pow(2,4))
// console.log(Math.sqrt(81))
// console.log(Math.random()*100)

// console.log(Math.floor(Math.random()*100));

//objects

// let student = {
//     name:"kezy",
//     age: "100",
//     email:"kezy@gmail.com"
// }

// console.log(student.name);
// console.log(Object.keys(student));
// console.log(Object.values(student));

//function
//  function myName(name){
//         console.log(name);

//  }
// myName("kezy");
// myName("esther");
// myName("james");

// function add(a,b){
//     return a + b
// }
// console.log(add(parseInt(prompt("enter first number")), parseInt(prompt("enter second number"))));

// function greet(name){
//     return "hello " + name
// }
// console.log(greet(["kezy", "esther", "james"]));

// // function expression
// const add = function(a,b){
//     return a + b
// }
// console.log(add(2,3));

// // arrow function
// const add = (a,b) => {
//     return a + b
// }
// console.log(add(2,3));


// function even(num){
//     if (num % 2 === 0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(even(parseInt(prompt("enter a number"))));

// function takeInput(){
//     let num = parseInt(prompt("enter a number"));
//     return num
// }
// console.log(takeInput());

// function subtract(a,b){
//     return a - b
// }
// console.log(subtract(5,2));

// function greater(){
//     let a = parseInt(prompt("enter a number"));
//     if (a > 6){
//         return "greater than 6"
//     }
//     else if (a < 6){
//         return "less than 6"
//     }
//     else{
//         return "equal to 6"
//     }
// }
// console.log(greater());

// function checkLengthOfName(){
//     let name = prompt("enter your name")
//     return (`the length of your name is ${name.length}`) 
// } 
// console.log(checkLengthOfName());

// let highestNumber = function(){
//     let num1 = parseInt(prompt("enter first number"));
//     let num2 = parseInt(prompt("enter second number"));
//     let num3 = parseInt(prompt("enter third number"));
//     let num4 = parseInt(prompt("enter fourth number"));

//     let highest = Math.max(num1, num2, num3, num4)
//     return (`the highest number is ${highest}`)
// }
// console.log(highestNumber());

//for loops
// for(initializer; conditional; increment){}
// for(let i = 0; i <= 10; i++ ){
//  if (i % 2 === 0 ){
//     console.log(i, 'is an even number')
//  }
//  else{
//     console.log(`${i} is an odd number`)
//  }
// }
// console.log()

// for(i = 5; i <= 20; i++){
//     console.log(`the value of i is ${i}`)
// }

// let score =[1,2,3,4,5,6,7,76,45,34]
//  for (let i = 0; i < score.length; i++){
//         console.log('scores =',score[i])
//  }

// for(let i = 1; i <= 50; i++){
    
//     console.log(i);
// }
//fibonacci
 
// let num = parseInt(window.prompt("enter a number"));
// let a = 0;
// let b = 1;
// let c;
// for (let i = 1; i <= num; i++){
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }

//DOM manipulation GET ELEMENTS by class name
// console.log(document.getElementsByClassName("text")[0].innerText)
// console.log(document.getElementById("box").innerText)
// get elements by id
// console.log(document.getElementById("text"))
// // query selector
// console.log(document.querySelector("p"))
// // // query selector all
// console.log(document.querySelectorAll("p"))
// console.log(document.querySelectorAll("li")[2].innerText)
// console.log(document.querySelectorAll("li")[5].innerText)
// console.log(document.querySelectorAll("li")[1].innerText)
//console.log(document.querySelectorAll("li")[2].textContent = "pork by javascriptz")
// console.log(document.querySelectorAll("li")[4].innerText)
// console.log(document.querySelectorAll("li")[0].innerText)

//console.log(document.getElementById("change").textContent = "eba by javascriptz")


// to get element 
// textContent
// innerHTML
// innerText


// let student = {
//     name: "kezy",
//     age: 100,
//     email:  "kecy@gmaiul.com"
// }
//harmonic sequence
//  let num = parseInt(prompt("enter a number"));
//  let sum = 0;
//  for (let i = 1; i <= num; i++){
//      sum += 1/i;
// }
//  console.log(`the sum of the harmonic sequence is ${sum}`);

//event listerners
// document.getElementById("btn").addEventListener("click", function(){
//     alert("button clicked");
// });
// document.getElementById("btn").addEventListener("mouseover", function(){
//     alert("mouse over button");
// });
// document.getElementById("btn").addEventListener("mouseout", function(){
//     alert("mouse out of button");
// });
// document.getElementById("btn").addEventListener("dblclick", function(){
//     alert("button double clicked");
// });

// let header = document.getElementById("header");

// header.style.color = "red";
// header.style.backgroundColor = "rgb(39, 245, 12)";
// header.style.fontSize = "50px";
// header.style.textAlign = "center";
// header.style.padding = "20px";
// header.style.border = "2px solid black";
// header.style.borderRadius = "10px";
// header.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.5)";
// header.style.transition = "all 0.3s ease-in-out";
// header.style.width = "max-content";
// header.style.margin = "30px auto";

// function HeaderColor() {
//     let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     header.style.color = randomColor;
//     header.style.backgroundColor = randomColor;
// }
// document.getElementById("btn").addEventListener("click", closed);
// headers = document.getElementById("myId");
//  let closed = () => {
//     if (headers.textContent === "Close")
//     {
//         headers.textContent = "Open";
//     }
//     else{
//         headers.textContent = "Close";
//     }
// }
 
function AddNewTask (){
    let inputBox = document.getElementById("todo-input");
    // document.getElementById("newtext").textContent = inputBox.value;
    let newElement = document.createElement("li");

    newElement.addEventListener("click", function() {
        newElement.classList.add("checked");
    });

    newElement.textContent = inputBox.value;
    document.getElementById("task-list").appendChild(newElement);
    inputBox.value = ""; // Clear the input box after adding the task
}

// function changeBg() {
    
//     let BgColor = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "teal", "brown", "gray", "lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow", "lightgray", "lavender", "peachpuff"];
//     let randomColor = BgColor[Math.floor(Math.random() * BgColor.length)];
//     document.body.style.backgroundColor = randomColor;
// }

// function AnimatedColorChange() {
//     let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "teal", "brown", "gray", "lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow", "lightgray", "lavender", "peachpuff"];
    
//     let index = 0;
    
//     setInterval(() => {
//         document.body.style.backgroundColor = colors[index];
//         index = (index + 1) % colors.length; // Loop through the colors
//     }, 100); // Change color every second
// }
function AnimatedColorChange() {
    let divColor = document.getElementById("div");
    let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "teal", "brown", "gray", "lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow", "lightgray", "lavender", "peachpuff", "coral", "gold", "silver", "maroon", "navy", "olive", "darkgreen", "darkblue", "darkred", "darkorange", "darkviolet", "darkcyan", "darkmagenta", "darkslategray", "indigo", "khaki", "lightseagreen", "lightsalmon", "lightsteelblue", "mediumaquamarine", "mediumorchid", "mediumseagreen", "mediumslateblue", "mediumturquoise", "mediumvioletred", "mistyrose", "moccasin", "navajowhite", "oldlace", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen", "lightgoldenrodyellow", "lightcyan", "lightcoral", "lightpink", "lightskyblue", "lightslategray", "lightyellow", "darkgray", "darkkhaki", "darkolivegreen", "darkorchid", "darkslateblue", "darkturquoise", "darkviolet", "dimgrey", "firebrick", "floralwhite", "gainsboro", "ghostwhite", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "ivory", "lavenderblush", "lemonchiffon", "lightblue", "lightgreen", "lightgrey", "lightslateblue", "lightsteelblue", "limegreen", "linen", "mediumblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff"];
    let index = 0;
    
    setInterval(() => {
        divColor.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Loop through the colors
    }, 200); // Change color every second
}
function AnimatedTextColorChange() {
    let textElement = document.getElementById("text");
    let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "teal", "brown", "gray", "lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow", "lightgray", "lavender", "peachpuff", "coral", "gold", "silver", "maroon", "navy", "olive", "darkgreen", "darkblue", "darkred", "darkorange", "darkviolet", "darkcyan", "darkmagenta", "darkslategray", "indigo", "khaki", "lightseagreen", "lightsalmon", "lightsteelblue", "mediumaquamarine", "mediumorchid", "mediumseagreen", "mediumslateblue", "mediumturquoise", "mediumvioletred", "mistyrose", "moccasin", "navajowhite", "oldlace", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen", "lightgoldenrodyellow", "lightcyan", "lightcoral", "lightpink", "lightskyblue", "lightslategray", "lightyellow", "darkgray", "darkkhaki", "darkolivegreen", "darkorchid", "darkslateblue", "darkturquoise", "darkviolet", "dimgrey", "firebrick", "floralwhite", "gainsboro", "ghostwhite", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "ivory", "lavenderblush", "lemonchiffon", "lightblue", "lightgreen", "lightgrey", "lightslateblue", "lightsteelblue", "limegreen", "linen", "mediumblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff"];
    let index = 0;
    
    setInterval(() => {
        textElement.style.color = colors[index];
        index = (index + 1) % colors.length; // Loop through the colors
    }, 200); // Change color every second
}//explanation: This function changes the background color of a div element with the id "div" every 200 milliseconds, cycling through a predefined list of colors.

// function sendmessage(){
//     let chat_input = document.getElementById("chat-input");
//     let newChat = document.createElement("p");
//     document.getElementById("chat-app").appendChild(newChat);
//     newChat.textContent = chat_input.value;
//     chat_input.value = ""; // Clear the input box after sending the message
// }
// function calculator() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("operator").value;
//     let result;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     document.getElementById("result").textContent = "Result: " + result;
// }