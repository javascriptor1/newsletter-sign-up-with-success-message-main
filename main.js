"use strict";
const submitButton = document.querySelector("#submit-button");
const subscriptionForm = document.querySelector('#subscribing-form');
const successDiv = document.querySelector('#success-div');
const mainContainer = document.getElementsByTagName('main')
const dismissButton = document.querySelector('#dismiss-button');

subscriptionForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(1){
        successDiv.classList.remove('hidden')
        mainContainer[0].classList.add('hidden');
    }
})
dismissButton.addEventListener('click',()=>{
    successDiv.classList.add('hidden')
    mainContainer[0].classList.remove('hidden');

})