window.onload = function() {
    let main = document.getElementById("main");
    let images = document.querySelectorAll('.thumb img');
    for (let im of images)
        im.onclick = function() {
            main.src = this.src;
        }

    let buttons = document.querySelectorAll(".buttons > button");
    for (let b of buttons)
        b.onclick = function() {
            let txt = this.getAttribute("rel");
            main.setAttribute("src", `images/galaxys8/${txt}1.jpg`);

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${txt}${i + 1}.jpg`;
        }

    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        let t = document.querySelectorAll(".product > div");
        for (let a of t) {
            a.style.border = "";
            a.children[0].style.transform = "";
        }

        let txt = this.value;

        let products = document.querySelectorAll(".product h2");
        for (let p of products)
            if (p.innerText.includes(txt) === true) {
                p.parentElement.style.border = "2px solid red";
                p.previousElementSibling.style.transform = "translateY(8px)";
            }
    }
}