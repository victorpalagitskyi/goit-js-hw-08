import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form")
const S_key = "feedback-form-state"
const currentEmail = document.querySelector("input")
const currentMessage = document.querySelector("textarea")
let C_mail = ""
let C_message =""
// ===============================================================
 function save(key, value) {
        try {
            const S_Data = JSON.stringify(value);
            localStorage.setItem(key, S_Data)
        } catch (err) {
            console.error(err)
        }
 }
    
 function load(key) {
        try {
            const S_State = localStorage.getItem(key)
            return S_State === null ? undefined : JSON.parse(S_State)
        }
        catch (err) {
            console.error(err)
         }
 }
const currentState = load(S_key)
if (currentState === undefined) {
    currentEmail.value = "",
        currentMessage.textContent = ""
} else {
    currentEmail.value = currentState.email
    currentMessage.textContent = currentState.message
}

form.addEventListener("input", throttle(onFormData, 500))
function onFormData(event) {
    if ((event.target.nodeName === "INPUT")) {
        C_mail = event.target.value
    }
    else {
        C_message = event.target.value
    }
    save(S_key, {
        email: C_mail,
        message: C_message
    });
    
}


// ==============================================================
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget; 
    console.log(currentState)
    email.value = "";
    message.value = "";
    localStorage.removeItem(S_key)
    
    })


    