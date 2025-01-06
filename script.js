const result = document.querySelector(".res");
const btn = document.querySelector(".calculate");

function love() {
    const name1 = document.querySelector("#name1").value;
    const name2 = document.querySelector("#name2").value;

    if (name1 && name2) {
        let total = Math.floor(Math.random() * 100);
        str = (name1+name2).replace(/\s/g, "");
        str = str.toLowerCase();
        if (localStorage.getItem(str)) {
             total = localStorage.getItem(str);
        } else {
            localStorage.setItem(str, total);
        }
        result.innerHTML = `${total}%`;
        console.warn(str);
    } else {
        alert("Please enter valid Names!");
    }
}

btn.addEventListener("click", love);
name1.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        love(result.value);
    }
});
name2.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        love(result.value);
    }
});