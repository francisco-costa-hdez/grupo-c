document.addEventListener("DOMContentLoaded",function(){

    const BienveBoton = document.querySelector("#BienveBoton")
    const PacoBoton = document.querySelector("#PacoBoton")
    const listaCarro= document.querySelector("#listaCarro")
    const tituloBienve = document.querySelector("#tituloBienve")
    const tituloPaco = document.querySelector("#tituloPaco")

    BienveBoton.addEventListener("click",function(){
        addItemToList(tituloBienve,listaCarro)
    })

    PacoBoton.addEventListener("click",function(){
        addItemToList(tituloPaco,listaCarro)
    })


    function addItemToList(tituloBienve,listaCarro) {
        console.log(tituloBienve.textContent)
            //crear un nuevo LI con el texto de la caja
            let nuevoLI = document.createElement("LI")
            nuevoLI.textContent = tituloBienve.textContent.trim()
            //insertarlo en la lista "My shopping list"
            listaCarro.appendChild(nuevoLI)
        
    }

})