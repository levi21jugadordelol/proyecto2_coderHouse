const d = document;
const w = window;
const boton = d.querySelector(".enviar");
const body = d.getElementsByTagName("body");
const span = d.querySelector(".close");
const $modal = d.querySelector(".modal");
const modal = d.getElementById("myModal");
const $modalFunciones = d.createElement("div");
const $formulario = d.querySelector(".section_formulario");
const formulario = d.querySelector(".formulario");

let scrollHabilitado = true;

function scrollModal() {
  w.addEventListener("scroll", (e) => {
    if (scrollHabilitado == true) {
      let scrollMouse = d.documentElement.scrollTop;
      if (scrollMouse > 350) {
        console.log(d.documentElement.scrollTop);

        e.preventDefault();
        $modal.classList.add("modal--show");
      } else if (scrollMouse < 400) {
        $modal.classList.remove("modal--show");
      }
    }
  });
}

function obtenerNombre() {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = d.getElementById("usuario").value;
    console.log(usuario);
    scrollHabilitado = false;
  });
}

class Perosnajes {
  constructor(edad, nombre, hobbie, preferencias) {
    this.edad = edad;
    this.nombre = nombre;
    this.hobbie = hobbie;
    this.preferencias = preferencias;
  }

  saludar() {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      const nombre = d.getElementById("usuario").value;

      alert(`holaa como estas ${nombre} `);
    });
  }

  despedirse() {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      const nombre = d.getElementById("usuario").value;

      alert(`cuidate ${nombre} `);
    });
  }
}

class Antony extends Perosnajes {
  botonModal() {
    d.addEventListener("click", (e) => {
      if (e.target.matches(".boton_antony")) {
        $modalFunciones.classList.add("modalContainer");
        $modalFunciones.setAttribute("id", "myModal");

        $modalFunciones.innerHTML = `
      
        <div class="modal-content">

            <span class="close">X</span>
             <h2>ayudame sempai</h2>
              <p>holaa de nuevo necesitas una ayuda con tu multiplicacion?
              ,dime los 5 numeros que deseas que vea
              </p>
              <form class="operacion_numerica">
              <input id="valor_numero" type="number" placeholder="ingrese los numeros">
              <input type="submit" value="enviar numero">
              <button>calcular</button>
              </form>
         
            <ul id="respuesta"></ul>  

        </div>  
      `;
        $formulario.appendChild($modalFunciones);
        // console.log($formulario);
        const modal = d.getElementById("myModal");
        modal.style.display = "block";
        const formlario_numerico = d.querySelector(".operacion_numerica");
        console.log(formlario_numerico);
        const arrayNumeros = [];

        formlario_numerico.addEventListener("submit", (e) => {
          e.preventDefault();

          const dato = d.getElementById("valor_numero");
          const datoNumerico = parseInt(dato.value);

          if (!isNaN(datoNumerico) && arrayNumeros.length < 5) {
            arrayNumeros.push(datoNumerico);
            alert("Número enviado correctamente.");
            this.operacion(arrayNumeros);
            dato.value = "";
          } else {
            alert("Ingresa un número válido. o alcanzo el limite");
          }
        });

        console.log(arrayNumeros);
      }
      if (e.target.matches(".close")) {
        const modal = d.getElementById("myModal");
        modal.style.display = "none";
      }
    });
  }
  operacion(arreglo) {
    const res = arreglo.reduce(
      (acumulador, valorActual) => acumulador * valorActual,
      1
    );
    alert(res);
  }
}

class Eren extends Perosnajes {
  botonModal() {
    d.addEventListener("click", (e) => {
      if (e.target.matches(".boton_eren")) {
        $modalFunciones.classList.add("modalContainer");
        $modalFunciones.setAttribute("id", "myModal");

        $modalFunciones.innerHTML = `
      
          <div class="modal-content">
            <span class="close">X</span>
             <h2>actuando como celosa </h2>
              <p>deseas preguntarme si he estado con alguien de tus amigas??, cual de las 3
              ana, suzan o maria
              </p>

               <form class="operacion_filter">
              <input id="valor_text" type="text" placeholder="ingrese el nombre de tu amiga">
             
              <button>pensando</button>
              </form>
         </div>  
      `;
        eren.saludar();
        $formulario.appendChild($modalFunciones);
        console.log($formulario);
        const modal = d.getElementById("myModal");
        modal.style.display = "block";

        const formulario_amiga = d.querySelector(".operacion_filter");
        console.log(formulario_amiga);
        const lista_nombre = ["ana", "carmen", "claudia", "yordana", "brenda"];

        formulario_amiga.addEventListener("submit", (e) => {
          e.preventDefault();
          let encontrado = false;
          const dato = d.getElementById("valor_text").value;
          console.log(dato);
          formulario_amiga.reset();
          if (typeof dato !== "string" || dato === null) {
            alert("ingrese correctamente el nombre");
          } else {
            lista_nombre.filter((e) => {
              if (e === dato) {
                encontrado = true;
              } else {
                encontrado = false;
              }
            });
          }
          if (encontrado === true) {
            alert("si estuve con ella, pero tu eres especial para mi");
          } else {
            alert(" nop no estuve con ella");
          }
        });
      }
      if (e.target.matches(".close")) {
        const modal = d.getElementById("myModal");
        modal.style.display = "none";
      }
    });
  }
}

class Levi extends Perosnajes {
  conversion() {}
  botonModal() {
    d.addEventListener("click", (e) => {
      if (e.target.matches(".boton_levi")) {
        $modalFunciones.classList.add("modalContainer");
        $modalFunciones.setAttribute("id", "myModal");

        $modalFunciones.innerHTML = `
      
          <div class="modal-content">
            <span class="close">X</span>
             <h2>rogando al profesor para aprobar</h2>
              <p>tu grupo ha sido jalado, me sorprende que jales en un curso tan facil, dime cual fue ultima nota de su reporte de trabajo de usds recuerdo que fue entre 13 y 14
              </p>
             <form class="operacion_map">
              <input id="valor_nota" type="number" placeholder="ingrese la nota de su ultimo trabajo">
             
              <button>rogando para aprobar</button>
              </form>  
         </div>  
      `;
        $formulario.appendChild($modalFunciones);
        console.log($formulario);
        const modal = d.getElementById("myModal");

        modal.style.display = "block";

        const formulario_notas = d.querySelector(".operacion_map");
        console.log(formulario_notas);

        formulario_notas.addEventListener("submit", (e) => {
          e.preventDefault();

          const dato = d.getElementById("valor_nota");
          const datoNumerico = parseInt(dato.value);
          console.log(datoNumerico);
          const lista_notas = [
            { nombre: "ana", nota: 11 },
            { nombre: "carmen", nota: 10 },
            { nombre: "claudia", nota: 9 },
            { nombre: "yordana", nota: 11 },
            { nombre: "brenda", nota: 8 },
          ];

          if (
            typeof datoNumerico !== "number" ||
            datoNumerico === null ||
            (datoNumerico !== 13 && datoNumerico !== 14)
          ) {
            alert("ingrese correctamente la nota o deseas jalar");
          } else {
            let notasActuales = lista_notas.map((amiga) => {
              return { ...amiga, nota: (amiga.nota + datoNumerico) / 2 };
            });
            console.log(notasActuales);
          }
        });
      }
      if (e.target.matches(".close")) {
        const modal = d.getElementById("myModal");
        modal.style.display = "none";
      }
    });
  }
}

const antony = new Antony(
  "16",
  "antony",
  "me gusta caminar",
  "chicas sonrientes"
);

const eren = new Eren(
  "17",
  "eren jeager",
  "me gusta ir al gym",
  "las silenciosas"
);

const levi = new Levi("27", "levi", "me gusta cocinar", "nunca lo he pensado");

w.addEventListener("scroll", scrollModal);
d.addEventListener("click", obtenerNombre);

antony.botonModal();
eren.botonModal();
levi.botonModal();
