let boxes = document.querySelectorAll('.box')
console.log(boxes)

let form = document.querySelector("#parking-form")

form.addEventListener ("submit", function(event){
    event.preventDefault()
    for (let box of boxes){
        console.log (box.value)
        if (box.value === ''){
            console.log("invalid")
            box.parentElement.classList.add("input-invalid")
        }
        else{
            console.log("valid")
            box.parentElement.classList.add("input-valid")
        }
    // let button = document.querySelector (".box")   
    }  
})
