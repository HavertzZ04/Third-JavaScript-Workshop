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



