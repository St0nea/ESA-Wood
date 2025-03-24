const productName = document.getElementById("product-name");
const productDesc = document.getElementById("product-description");
const productImg = document.getElementById("product-img")
function toggleBox() {
    productName.classList.add("trigger-show-content");
    productDesc.classList.replace("hiddenTextBox", "showTextBox");
    productImg.classList.replace("hiddenPicture", "showPicture");
}

productName.addEventListener("click", toggleBox);