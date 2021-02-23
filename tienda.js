document.addEventListener("DOMContentLoaded",function(){

    const BienveBoton = document.querySelector("#BienveBoton")
    const PacoBoton = document.querySelector("#PacoBoton")
    const listaCarro= document.querySelector("#listaCarro")
    const tituloBienve = document.querySelector("#tituloBienve")
    const tituloPaco = document.querySelector("#tituloPaco")
    const precioPaco = document.querySelector("#precioPaco")
    const precioBienve = document.querySelector("#precioBienve")
    

    BienveBoton.addEventListener("click",function(){
        const contenidoBienve=tituloBienve.textContent+" "+precioBienve.textContent
        addItemToList(contenidoBienve,listaCarro)
    })

    PacoBoton.addEventListener("click",function(){
        const contenidoPaco=tituloPaco.textContent+" "+precioPaco.textContent
        addItemToList(contenidoPaco,listaCarro)
    })

    function addItemToList(texto,listaCarro) {
        console.log(texto)
            //crear un nuevo LI con el texto de la caja
            let nuevoLI = document.createElement("LI")
            nuevoLI.textContent = texto
            //insertarlo en la lista "My shopping list"
            listaCarro.appendChild(nuevoLI)
        
    }

    $(function () {
        $('[data-toggle="popover"]').popover({
          html: true,
          content: function() {
              return $('.popover').html();
            }
        });
      })

})