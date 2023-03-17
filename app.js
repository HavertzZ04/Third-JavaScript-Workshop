const select = document.querySelector("#options");
const camperForm = document.querySelector("#camper");
const trainerForm = document.querySelector("#trainer");

//Funcion que nos ayuda a imprimir en pantalla el formulario correcto segun si es camper or trainer
select.addEventListener("change", function(){
    if(select.value === "camper"){
        camperForm.style.display = "block"
        if(1 == 1){
            trainerForm.style.display = "none"
        }
    }
    if (select.value === "trainer") {
        trainerForm.style.display = "block"
        if(1 == 1){
            camperForm.style.display = "none"
        }
    }
});

//Imprimir los valores del formulario en formato json, usando un split para separar cada propiedad con su valor
const main = document.querySelector('.main');
const procesaTodo = (event) => {
    event.preventDefault();
const datos = new FormData(event.target);
const datosCompletos = Object.fromEntries(datos.entries());
let jsonResult = JSON.stringify(datosCompletos);
console.log(jsonResult);
let jsonSplit = jsonResult.split(",")
console.log(jsonSplit[1]);
}
main.addEventListener('submit', procesaTodo);



