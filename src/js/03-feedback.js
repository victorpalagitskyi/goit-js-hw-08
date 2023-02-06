// import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form")
const S_KEY = "feedback-form-state"
const currentEmail = document.querySelector("input")
const currentMessage = document.querySelector("textarea")
let c_Mail = ""
let c_Message =""
// ===============================================================
 function save(key, value) {
        try {
            const s_Data = JSON.stringify(value);
            localStorage.setItem(key, s_Data)
        } catch (err) {
            console.error(err)
        }
 }
    
 function load(key) {
        try {
            const s_State = localStorage.getItem(key)
            return s_State === null ? undefined : JSON.parse(s_State)
        }
        catch (err) {
            console.error(err)
         }
 }
const currentState = load(S_KEY)
if (currentState === undefined) {
    currentEmail.value = "",
        currentMessage.textContent = ""
} else {
    currentEmail.value = currentState.email
    currentMessage.textContent = currentState.message
}
// throttle(onFormData, 500))
form.addEventListener("input", onFormData)
function onFormData(event) {
    if ((event.target.nodeName === "INPUT")) {
        c_Mail = event.target.value
    }
    else {
        c_Message = event.target.value
    }
    save(S_KEY, {
        email: c_Mail,
        message: c_Message
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
    localStorage.removeItem(S_KEY)
    
    })


    