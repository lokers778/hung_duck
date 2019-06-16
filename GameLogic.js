document.addEventListener("DOMContentLoaded",function () {

let examplePassword ="Przykladowe Haslo";
let password=""

   const stringToPassword=()=>
    {
        let passwordLength = examplePassword.length;

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
    examplePassword=examplePassword.toUpperCase();
    document.querySelector(".container header").innerText =password

};
const createKeyboard=()=> {
    let letters=["A","B","C","D","E",'F',"G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var keyboard="";
    for(let i=0;i<=25;i++){
keyboard=keyboard+`<div class="key">${letters[i]}</div>`
        if(i%6==0){
            keyboard=keyboard+'<br/>'
        }
    }
    document.querySelector(".container article").innerHTML=keyboard;
};
    createPassword();
    createKeyboard();
});