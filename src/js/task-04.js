const decrease = document.querySelector(`[data-action="decrement"]`);
const increase = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector("#value");

let counterValue = 0;

function decreaseEvent() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function increaseEvent() {
    counterValue += 1;
    value.textContent = counterValue;
}

decrease.addEventListener("click", decreaseEvent);
increase.addEventListener("click", increaseEvent);