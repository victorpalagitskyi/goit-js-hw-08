import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form")
const S_KEY = "feedback-form-state"
let c_Mail = ""
let c_Message = ""
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
            const s_State = localStorage.getItem(key)
            return s_State === null ? undefined : JSON.parse(s_State)
        }
        catch (err) {
            console.error(err)
         }
 }



form.addEventListener("input", throttle(onFormData, 500))
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
    console.log(load(S_KEY))
    const {
        elements: { email, message }
    } = event.target;
    email.value = "";
    message.value = "";
    localStorage.removeItem(S_KEY)
})
 