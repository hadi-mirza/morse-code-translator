/*----- app's state (variables) -----*/

let translation = ""

/*----- cached element references -----*/

let input1 = document.getElementById("input1")
let span1 = document.getElementById("span1")
let btn1 =  document.getElementById("btn1")

/*----- event listeners -----*/

btn1.addEventListener("click", translate);

/*----- functions -----*/

function translate() {
    translation = translateMorse(input1.value)
    span1.innerHTML = translation
}

function translateMorse(str) {
    let translatedString = ""
    for (i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            translatedString += ".-"
        } else if (str[i] == "b") {
            translatedString +=  "-..."
        } else if (str[i] == "c") {
            translatedString +=  "-.-."
        }
        else if (str[i] == "d") {
            translatedString +=  "-.."
        }
        else if (str[i] == "e") {
            translatedString +=  "."
        }
        else if (str[i] == "f") {
            translatedString +=  "..-."
        }
        else if (str[i] == "g") {
            translatedString +=  "--."
        }
        else if (str[i] == "h") {
            translatedString +=  "...."
        } 
        else if (str[i] == "i") {
            translatedString +=  ".."
        }
        else if (str[i] == "j") {
            translatedString +=  ".---"
        }
        else if (str[i] == "k") {
            translatedString +=  "-.-"
        }
        else if (str[i] == "l") {
            translatedString +=  ".-.."
        }
        else if (str[i] == "m") {
            translatedString +=  "--"
        }
        else if (str[i] == "n") {
            translatedString +=  "-."
        }
        else if (str[i] == "o") {
            translatedString +=  "---"
        }
        else if (str[i] == "p") {
            translatedString +=  ".--."
        }
        else if (str[i] == "q") {
            translatedString +=  "--.-"
        }
        else if (str[i] == "r") {
            translatedString +=  ".-."
        }
        else if (str[i] == "s") {
            translatedString +=  "..."
        }
        else if (str[i] == "t") {
            translatedString +=  "-"
        }
        else if (str[i] == "u") {
            translatedString +=  "..-"
        }
        else if (str[i] == "v") {
            translatedString +=  "...-"
        }
        else if (str[i] == "w") {
            translatedString +=  ".--"
        }
        else if (str[i] == "x") {
            translatedString +=  "-..-"
        }
        else if (str[i] == "y") {
            translatedString +=  "-.--"
        }
        else if (str[i] == "z") {
            translatedString +=  "-.-.."
        }
        else if (str[i] == " ") {
            translatedString +=  " "
        }
      }
      return translatedString
    }

