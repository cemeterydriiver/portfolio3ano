  //efeito máquina de escrever
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector(".titulo-principal");
  typeWrite(titulo);

  export function hoverChangeDescription(nameCard, text) {
    var changeDescription = document.querySelector(".changeDescription");

    document.querySelector(nameCard).addEventListener("mouseover", () => {
      changeDescription.innerHTML = text;
    });

    document.querySelector(nameCard).addEventListener("mouseout", () => {
      changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;
    });
  }
