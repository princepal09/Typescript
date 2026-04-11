
function getInfo(){

    const nameInput = document.getElementById("name") as HTMLInputElement
    const name : string = nameInput.value

    const emailInput = document.getElementById("email") as HTMLInputElement
    const email : string = emailInput.value

    const ageInput = document.getElementById("age") as HTMLInputElement
    const age : number = Number(ageInput.value)


    console.log({
        name, age, email
    })

}