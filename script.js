//  Part 1: Basics
// Variables and conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = " You are an adult!";
  } else if (age > 0) {
    result.textContent = " You are still a minor.";
  } else {
    result.textContent = " Please enter a valid age.";
  }
}


//  Part 2: Functions
// Function to calculate sum
function addNumbers(a, b) {
  return a + b;
}

function showSum() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = addNumbers(n1, n2);

  document.getElementById("sumResult").textContent = "Sum = " + sum;
}

// Another reusable function: format a string
function greetUser(name) {
  return `Hello, ${name}! Welcome 🎉`;
}
console.log(greetUser("Developer")); // Demo in console


//  Part 3: Loops


// Example 1: for loop (countdown)
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old results
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: forEach loop (iterate array)
function listFruits() {
  let fruits = [" Apple", " Banana", " Grapes", " Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}


//  Part 4: DOM Manipulation


// 1. Toggle visibility
document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");
  text.style.display = (text.style.display === "none") ? "block" : "none";
});

// 2. Change background color
document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.background = 
    document.body.style.background === "lightyellow" ? "#f9f9f9" : "lightyellow";
});

// 3. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});
