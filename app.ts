// let inputUser = document.querySelector("#username") as HTMLInputElement;
// let inputPass = document.querySelector("#password") as HTMLInputElement;
// let htmlForm = document.querySelector(".form") as HTMLFormElement;

// htmlForm.addEventListener("submit", () => {
//     if (inputPass.value && inputUser.value) {

// }
// }) 
class Car {
    brand: string;
    model: string;
    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }
   drive() {
        console.log(this.model + " Car is enabled");

    }
}
class Lombergine extends Car {
    constructor(brand: string, model: string) {
        super(brand, model);
    }
}
const myCar = new Car("Ferrari", "JIP");