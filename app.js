const inputDegree = document.querySelector("#Degree")
const degreeType = document.querySelector("#Degree_type")
const result = document.querySelector("#result")

inputDegree.addEventListener('keyup',(e)=>{
    
    if (isNaN(e.target.value)){
        e.target.value = '';
    }
});


const button = document.querySelector(".convert-btn")

button.addEventListener('click', convert);

function convert(){
    let selectedElem = degreeType.value
    console.log(selectedElem);
    if (selectedElem === "Fahrenheit") {
        result.value = (5*(parseInt(inputDegree.value) - 32)/9 ).toFixed(2) + ' C' ;
    }
    else if(selectedElem === 'Celcious'){
            result.value = ((9 * parseInt(inputDegree.value))/ 5 +32).toFixed(2)  + " F"
        }
}

