var bandera_perfil = 0;


//navegacion elemento selecionados barra lateral
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quitar clase 
        navLinks.forEach(link => link.classList.remove('active'));

      
        const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  {
    threshold: 0.6 //60% de visibilidad
  }
);

sections.forEach(section => observer.observe(section));


function opciones(opcion) {
  desactivador();

  if (opcion < 1 || opcion > 4) {
    alert("Seleccione una opción válida!");
    return;
  }

  const selector = document.querySelector(`.s${opcion}`);
  const category = document.querySelector(`.p${opcion}`);

  activador(selector, category);
}


function activador(item, category) {

  item.style.display = "block";

  category.style.background = "white";
  category.style.color = "rgb(43, 40, 75)"
}

async function desactivador() {
  var selector = document.querySelector(".s0");
  var selector1 = document.querySelector(".s1");
  var selector2 = document.querySelector(".s2");
  var selector3 = document.querySelector(".s3");
  var selector4 = document.querySelector(".s4");

  selector.style.display = "none";
  selector1.style.display = "none";
  selector2.style.display = "none";
  selector3.style.display = "none";
  selector4.style.display = "none";


  var c1 = document.querySelector(".p1");
  var c2 = document.querySelector(".p2");
  var c3 = document.querySelector(".p3");
  var c4 = document.querySelector(".p4");


  c1.style.background = "transparent";
  c2.style.background = "transparent";
  c3.style.background = "transparent";
  c4.style.background = "transparent";

  c1.style.color = "white"
  c2.style.color = "white"
  c3.style.color = "white"
  c4.style.color = "white"

}



//para control de header nav a section by id

function navSection(sec) {
  alert(sec)



}


//para contancto copiar correo 

function copiarCorreo() {
  const correo = document.getElementById('correo').textContent;
  navigator.clipboard.writeText(correo).then(function () {
    const mensaje = document.getElementById('mensaje-copiado');
    mensaje.style.display = 'block';
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 1500);
  });
}


//Array for proyect 


const data = [
  {
    name: "Proyecto Agroecológico",
    description: "Descripción del proyecto agroecológico...",
    images: ["mercadoagroecologico.png", "bar.png", "me.png"]
  },
  {
    name: "Bar Inteligente",
    description: "Este proyecto busca automatizar la gestión de un bar...",
    images: ["bar.png", "me.png", "mercadoagroecologico.png"]
  },
  {
    name: "Portfolio Personal",
    description: "Un sitio personal para mostrar mis trabajos y habilidades.",
    images: ["me.png", "mercadoagroecologico.png", "bar.png"]
  }
];

