document.addEventListener("DOMContentLoaded", function() {

    const btnCart = document.querySelectorAll(".addToCart")
    const listaCarro = document.querySelector("#listaCarro")
    const tituloBienve = document.querySelector("#tituloBienve")
    const tituloPaco = document.querySelector("#tituloPaco")
    const precioPaco = document.querySelector("#precioPaco")
    const precioBienve = document.querySelector("#precioBienve")

    btnCart.forEach(item => {
        item.addEventListener('click', () => {
            const contenido = item.parentElement.parentElement.firstElementChild.textContent + " " + item.parentElement.parentElement.firstElementChild.nextElementSibling.textContent
            addItemToList(contenido, listaCarro)
        })
    })

    function addItemToList(texto, listaCarro) {
        //crear un nuevo LI con el texto de la caja
        let nuevoLI = document.createElement("LI")
        nuevoLI.classList.add("list-group-item")
        nuevoLI.textContent = texto
            //insertarlo en la lista "My shopping list"
        listaCarro.prepend(nuevoLI)

    }

    $(function() {
        $('[data-toggle="popover"]').popover({
            html: true,
            content: function() {
                return $('.popover').html();
            }
        });
    })

})