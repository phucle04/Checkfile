const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
    title.textContent = "Bạn vừa bấm nút!";
    title.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

