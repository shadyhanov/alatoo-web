const imageElement = document.getElementById("myImage");

let isAlaTooLogo = false;

imageElement.onclick = () => {
    if(isAlaToo) {
        imageElement.src = "./img/ala-too_IT.png"
    }else {
        imageElement.src = "./img/Ala-Too_International_University_Seal.png"
    }
    isAlaTooLogo = !isAlaTooLogo
};


const userNameElement = document.getElementById("userName");
let textName = "Welcome"

userNameElement.onclick = () => {
    let name = prompt("What is your name?");
    alert(`${textName} ${name}`)
}