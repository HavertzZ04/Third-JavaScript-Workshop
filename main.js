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


let campus = { //This is the main object
    Campus : {
        headquarters : [],
    },
    trainers: {
        names : [],
        phone : [],
        team : {
            typeOfTeam : [],
            schedule : [],
            hour : [],
            classRoom : {
                room: [],
                floor: []
            },
        email : []
        },

    },
    campers: {
        names : [],
        phone : [],
        team : [
                programing = {
                    schedule : "", //Days of the week
                    hour : "",     
                    classRoom : {
                        room: "",
                        floor: ""
                    },
                },
                english = {
                    schedule : "", //Days of the week
                    hour : "",     
                    classRoom : {
                        room: "",
                        floor: ""
                    },
                },
                ser = {
                    schedule : "", //Days of the week
                    hour : "",     
                    classRoom : {
                        room: "",
                        floor: ""
                    },
                },
                team = [],
                email = [],
                level = [],
                neighborhood = [],
                transportation = []
            ],
    },
    levels: {

    },
    tecnologies: "",
    teams: "",
    roadMap: ""
}