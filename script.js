// Сообщение при нажатии на кнопку "Купить"
 document.addEventListener("DOMContentLoaded", function () {
     let buttons = document.querySelectorAll("button");
     buttons.forEach(button => {
         button.addEventListener("click", function () {
             alert("Товар добавлен в корзину!");
         });
     });
 });
