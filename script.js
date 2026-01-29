
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Hello, ${name}` : "Hello";
});


const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    const color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
    box.style.color = "white";
  });
});
