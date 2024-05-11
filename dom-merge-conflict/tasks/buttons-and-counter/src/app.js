//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment and decrement to increase and decrease the count by one.</p>
    `;
  body.appendChild(header);

  const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">decrement</button>
    `;
  body.appendChild(main);

  const button = body.querySelector("#increment");
  const decrement = body.querySelector("#decrease");

  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  decrement.addEventListener("click", () => {
    decrement(counter);
  });
  return body;
}
