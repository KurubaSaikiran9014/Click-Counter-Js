let clickCounterContainer = document.getElementById("clickCounterContainer");
let counterValue = document.getElementById("counterValue");
let btn = document.getElementById("incrementBtn");
localStorage.setItem("clickCount", parseInt(counterValue.textContent));
btn.onclick = function() {
    let count = parseInt(counterValue.textContent);
    let updateC = count + 1;
    localStorage.setItem("clickCount", updateC);
    counterValue.textContent = updateC;



}
