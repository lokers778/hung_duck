document.addEventListener("DOMContentLoaded", function () {

    let examplePassword = "Przykladowe Haslo";
    let password = ""
    let passwordLength = examplePassword.length;
    let letters = ["A", "B", "C", "D", "E", 'F', "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
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
        document.querySelector(".container header").innerText = password

    };

    const createKeyboard = () => {

        let keyboard = "";
        for (let i = 0; i <= 25; i++) {
            let singleKey="key"+i;
            keyboard = keyboard + `<div class="key" id="${singleKey}" >${letters[i]}</div>`

            if (i % 6 == 0) {
                keyboard = keyboard + '<br/>'
            }
        }

        document.querySelector(".container article").innerHTML = keyboard;

    };
const checkIfClick=(nr)=> {
    let keys = document.querySelectorAll(".key");
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", function () {
           for(let j=0;j<passwordLength;j++){
            if(examplePassword.charAt(j)===keys[i].innerText){
                alert(j)
            }
           }
        })
    }
};
        createPassword();
    createKeyboard();
    checkIfClick();
});