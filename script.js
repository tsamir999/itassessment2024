const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

const nameInput =document.querySelector("#name");
const email =document.querySelector("#email");
const message =document.querySelector("#message");
const errorNodes =document.getElementsByClassName("error");
const success =document.querySelector("#success");

function validateForm(){
    clearMessages();

    if(nameInput.value.length<1){
        errorNodes[0].innerText= "Name cannot be blank";
        nameInput.classList.add("error-border");
    }

    if (!emailIsValid(email.value)){
        errorNodes[1].innerText="Invalid email";
        email.classList.add("error-border");
    }
}

function clearMessages(){
    for(let i = 0; i<errorNodes.length; i++){
        errorNodes[i].innerText="";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}