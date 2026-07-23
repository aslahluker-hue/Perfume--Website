// ======================
// AUTO IMAGE SLIDER
// ======================

let slideIndex = 0;
showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}


// ======================
// ADD TO CART
// ======================

let cart = 0;

function addCart() {
    cart++;
    document.getElementById("cart-count").innerHTML = cart;
    alert("Product Added Successfully!");
}


// ======================
// SEARCH SUGGESTIONS
// ======================

const perfumes = [
    { name: "Royal Oud", link: "product1.html" },
    { name: "Blue Ocean", link: "product2.html" },
    { name: "Black Musk", link: "product3.html" },
    { name: "Golden Night", link: "product4.html" }
];

const input = document.getElementById("searchInput");
const list = document.getElementById("searchList");

if (input && list) {

    input.addEventListener("keyup", function () {

        let value = input.value.toLowerCase();

        list.innerHTML = "";

        if (value === "") {
            list.style.display = "none";
            return;
        }

        let result = perfumes.filter(item =>
            item.name.toLowerCase().includes(value)
        );

        result.forEach(item => {

            let div = document.createElement("div");

            div.innerHTML = item.name;

            div.onclick = function () {
                window.location.href = item.link;
            };

            list.appendChild(div);

        });

        list.style.display = result.length ? "block" : "none";
    });

}

document.getElementById("cart-count").innerHTML = cart;

alert("Product Added Successfully!");

}
