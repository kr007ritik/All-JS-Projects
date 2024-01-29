const button = document.getElementById("changeBG");

button.addEventListener("click", function() {
    const randomColor = makeRandomColor();
    document.body.style.backgroundColor = randomColor;
})

const makeRandomColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
} 