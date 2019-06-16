document.addEventListener("DOMContentLoaded", function () {

    let examplePassword = "Przykladowe Haslo";
    let password = "";
    let passwordLength = examplePassword.length;
    let letters = ["A", "B", "C", "D", "E", 'F', "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let failCounter=0;
    const stringToPassword = () => {


        for (let i = 0; i < passwordLength; i++) {
            if (examplePassword.charAt(i) == " ") {
                password = password + " "
            } else {
                password = password + "-"
            }
        }
    };

    const createPassword = () => {
        stringToPassword();
        examplePassword = examplePassword.toUpperCase();
        document.querySelector(".container header").innerHTML = password

    };

    const createKeyboard = () => {

        let keyboard = "";
        for (let i = 0; i <= 25; i++) {
            let singleKey="key"+i;
            keyboard = keyboard + `<div class="key" id="${singleKey}" >${letters[i]}</div>`

            if (i % 7 == 0) {
                keyboard = keyboard + '<br/>'
            }

        }
        document.querySelector(".container article").innerHTML = keyboard;

    };

    String.prototype.setChart=function (position,chart) {
        if(position>this.length-1){
            return this.toString();
        }
        else return this.substr(0,position)+chart+this.substr(position+1)
    }


const checkIfClick=()=> {
        let succes=false;
    let keys = document.querySelectorAll(".key");
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", function () {
           for(let j=0;j<passwordLength;j++){
            if(examplePassword.charAt(j)===keys[i].innerHTML){
                alert(j);
               password=password.setChart(j,keys[i].innerHTML);
               succes=true;
                document.querySelector(".container header").innerHTML = password

            }
           }
           if(succes==true) {


           }
           else{

           }
        })
    }

};
    createKeyboard();
    createPassword();
    checkIfClick();



});