import {conexiones} from "./conexionAPI.js";

const lista = document.querySelector ("[data-producto]")


function crearCard(id,Nombre,Precio,image){
    const card = document.createElement("div");
    card.classList.add = "card"
    card.innerHTML= 
    `<div class="card">
                <img src="${image}" alt="">
                <div class="card-container--info" data-producto>
                    <h3 class="nombre__producto">${Nombre}</h3>
                    <div class="card-container--value">
                        <p class="Precio">$ ${Precio}</p>
                        <img clas
                         src="./favicons/trash.png" alt="borrar" style="width: 20px; height: 20px;">
                    </div>
                </div>
            </div>`;

                  const deleteButton = document.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        conexiones.deleteProduct(id)
            .then(() => {
                card.remove();
            })
            .catch(err => console.log(err));
    });

    lista.appendChild(card);
    return card;
}




const product = async () => {
  try{
    const listaProduct = await conexiones.listarProdutos();

    listaProduct.forEach(productos => {  
        lista.appendChild(
          crearCard(
            productos.id,
            productos.Nombre,
            productos.Precio,
            productos.image)
          );
});

} catch(error) {
  console.log(error)
};
};

product()