const input_Item = document.getElementById("input-item")

const div_lista = document.getElementById("divLista");

const button_Add = document.getElementById("id-button")

button_Add.addEventListener("click", () => {
        const show = document.createElement("span");
        const itemValue = input_Item.value;

        show.innerText = itemValue + "\xa0" + "\xa0" + "\xa0" +" 🛒";
        div_lista.appendChild(show);
        localStorage.setItem(localStorage.length + 1, itemValue);

})

function limpar() {
        input_Item.value = ""
        div_lista.innerText = ""
}

