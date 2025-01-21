var bandera_perfil = 0;

function opciones(opcion) {
    this.desactivador()
  switch (opcion) {
    case 0:
      alert("0");
      break;
    case 1:
      var selector = document.querySelector(".s1");
      var category = document.querySelector(".p1")
    
      this.activador(selector, category);
      break;
    case 2:
      var selector = document.querySelector(".s2");
      var category = document.querySelector(".p2")
 
      this.activador(selector, category);
      break;

    case 3:
      var category = document.querySelector(".p3")
      var selector = document.querySelector(".s3");
  
      this.activador(selector, category);
      break;
    case 4:
      var category = document.querySelector(".p4")
      var selector = document.querySelector(".s4");
      this.activador(selector, category);
      break;

    default:
        alert("Selecione una opción valida!")
      break;
  }
}

function activador(item, category) {
 
  item.style.display = "block";

  category.style.background = "white";
  category.style.color = "rgb(43, 40, 75)"
}

async function desactivador(){
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
