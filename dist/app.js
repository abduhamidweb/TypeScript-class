"use strict";
// let inputUser = document.querySelector("#username") as HTMLInputElement;
// let inputPass = document.querySelector("#password") as HTMLInputElement;
// let htmlForm = document.querySelector(".form") as HTMLFormElement;
// htmlForm.addEventListener("submit", () => {
//     if (inputPass.value && inputUser.value) {
// }
// }) 
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    drive() {
        console.log(this.model + " Car is enabled");
    }
}
const myCar = new Car("Ferrari", "JIP");
