const select = document.querySelector("#options");
const camperForm = document.querySelector("#camper");
const trainerForm = document.querySelector("#trainer");

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


const main = document.querySelector('.main');

const procesaTodo = (event) => {
    event.preventDefault();
const datos = new FormData(event.target);
const datosCompletos = Object.fromEntries(datos.entries());
console.log(datosCompletos);}

main.addEventListener('submit', procesaTodo);

/*
let campus = { //This is the main object
    Campus : {
        city : [],
    },
    trainers: {
        names : [],
        phone : [],
        email : [],
        role : [],
        schedule : [],
        neighborhood : [],
        transportation : [],
    },
    campers: {
        names : [],
        phone : [],
        team : [],
        map : [],
        schedule : [],
        programing : [],
        english : [],
        ser : [],
        email : [],
        level : []
    }
}
*/



