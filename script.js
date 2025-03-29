document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("noBtn");
    
    function moveButton() {
        let maxX = window.innerWidth - btn.offsetWidth;
        let maxY = window.innerHeight - btn.offsetHeight;

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        btn.style.position = "absolute"; 
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    }

    btn.addEventListener("mouseover", moveButton);
    btn.addEventListener("click", moveButton);
});
