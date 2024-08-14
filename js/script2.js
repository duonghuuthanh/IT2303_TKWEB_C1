window.addEventListener("load", function() {
    let p = this.document.querySelector(".products");
    let closes = document.getElementsByClassName("close");
    for (let c of closes)
        c.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm("Bạn chắc chắn xóa không?") === true) {
                p.removeChild(this.parentElement.parentElement);
            }
        });


    let form = this.document.querySelector(".form");
    form.style.display = "none";

    let insert = this.document.querySelector(".insert");
    insert.addEventListener("click", function() {
        form.classList.toggle("show");
    });

    let b = this.document.querySelector(".btn");
    b.addEventListener("click", function() {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let image = document.getElementById("image").value;

        let h = `
            <div class="product">
                <div>
                    <img src="${image}" alt="${name}" />
                    <h2>${name}</h2>
                    <div class="price">${price}<sup>đ</sup></div>
                    <a href="#" class="close">&times;</a>
                </div>
            </div>
        `;

        // p.innerHTML = h + p.innerHTML;
        let first = document.querySelector(".product:first-child");
        first.insertAdjacentHTML("beforebegin", h);

    });

    let titles = this.document.querySelectorAll("a.title");
    for (let t of titles)
        t.addEventListener("click", function() {
            let v = prompt("Tên mới", this.innerText);
            if (v !== null)
                this.innerText = v;
        });
});