document.addEventListener("DOMContentLoaded", function () {

    let examplePassword = "safsaf"
    let password = "";
    let passwordLength = examplePassword.length;
    let letters = ["A", "B", "C", "D", "E", 'F', "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let failCounter = 0;

  const  getRandomWord =  () => {

        fetch("http://api.wordnik.com/v4/words.json/randomWord?api_key=qf00nb4nnzijh3csd6okb61b6tgzkrm1ayy50ii1crhohqko0")
            .then(response =>{ return response.json()})
            .then((data) => {
                password="";

                examplePassword=data.word;
                passwordLength = examplePassword.length;
return(examplePassword)

            })
            .then(()=>{
                console.log(examplePassword)
                createKeyboard();
                createPassword();
                checkIfClick();
            })

            .catch(error => {
                console.error(error);
            });

    };


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
            let singleKey = "key" + i;
            keyboard = keyboard + `<div class="key" id="${singleKey}" >${letters[i]}</div>`

            if (i % 7 == 0) {
                keyboard = keyboard + '<br/>'
            }

        }
        document.querySelector(".container article").innerHTML = keyboard;

    };

    String.prototype.setChart = function (position, chart) {
        if (position > this.length - 1) {
            return this.toString();
        } else return this.substr(0, position) + chart + this.substr(position + 1)
    }

    let imgPosition = 0;
    const checkIfClick = () => {
        let keys = document.querySelectorAll(".key");
        for (let i = 0; i < keys.length; i++) {
            keys[i].addEventListener("click", function () {
                for (let j = 0; j < passwordLength; j++) {
                    if (examplePassword.charAt(j) === keys[i].innerHTML) {
                        this.classList.add("succes");
                        password = password.setChart(j, keys[i].innerHTML);
                        document.querySelector(".container header").innerHTML = password;
                    }

                }

                if (!this.classList.contains("succes")) {
                    this.classList.add("fail");
                    this.removeEventListener("click", function () {
                        ""
                    })
                    failCounter++;
                    imgPosition = imgPosition + 400;
                    document.querySelector("figure").style.backgroundPosition = `15px ${-20 - imgPosition}px`;
                    console.log(failCounter);
                    console.log(imgPosition);
                }
                if (examplePassword == password) {
                    document.querySelector(".container article").innerHTML = "YOU WIN !!";
                }
                if (failCounter == 7) {
                    document.querySelector(".container article").innerHTML = "TRY AGAIN!!";
                }

            })
        }

        const duckSound = () => {
            let duck = document.querySelector("body > div.background > div.rubberDuck");
            duck.addEventListener("click", () => {
                let audio = document.getElementById("myAudio");
                audio.play();

            })


        }
        duckSound();
    };
    getRandomWord();


});