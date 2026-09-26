
const signupBtn = document.querySelector("#signupBtn");

const submitBtn =document.querySelector('.singup-submit');
const modal = document.querySelector(".modal-overlay")
const form = document.querySelector("#signupForm");
const closeBtn = document.querySelector(".close-modal");
const switchToLogin = document.querySelector("#openLogin")

const loginBtn = document.querySelector("#loginBtn");
const openLogin =document.querySelector(".loginOverlay");
const closeLoginBtn = document.querySelector(".closeLogin-modal");
const switchToSignup = document.querySelector("#openSignup")


// OPEN  Signup MODAL

if(signupBtn){

    signupBtn.addEventListener("click",() =>{
        modal.classList.add("active");
    });
}


// Close signup modal

if(closeBtn){

    closeBtn.addEventListener("click", () =>{
        modal.classList.remove("active");
    });
}


// Open login

if(loginBtn){

    loginBtn.addEventListener("click",()=>{
        openLogin.classList.add("active");
    });
}

// close login

if(closeLoginBtn){
    closeLoginBtn.addEventListener("click",()=>{
        openLogin.classList.remove("active");
    });
}

// Switching between


if(switchToLogin){
    switchToLogin.addEventListener("click",()=>{
        modal.classList.remove("active");
        openLogin.classList.add("active");
    });
}

if(switchToSignup){
    switchToSignup.addEventListener("click",()=>{
        openLogin.classList.remove("active");
        modal.classList.add("active");
    });
}


//  For escape key working

document.addEventListener("keydown", (e) =>{
    if(e.key === "Escape"){
        modal.classList.remove("active");
        openLogin.classList.remove("active");
    } 
});

// for mouse event outside


document.addEventListener("click", (e) => {

    if (
        e.target.classList.contains("modal-overlay") ||
        e.target.classList.contains("loginOverlay")
    ) {
        e.target.classList.remove("active");
    }
});


// ===============================================================
// ===============================================================
// MORE EFFICIENT CODE I THINK WILL BE 
// ===============================================================
// ===============================================================


// const signupBtn = document.getElementById("signupBtn");
// const loginBtn = document.getElementById("loginBtn");

// const signupModal = document.querySelector(".modal-overlay");
// const loginModal = document.querySelector(".loginOverlay");

// const closeSignup = document.querySelector(".close-modal");
// const closeLogin = document.querySelector(".closeLogin-modal");

// const openLogin = document.getElementById("openLogin");
// const openSignup = document.getElementById("openSignup");


// // Open Signup
// signupBtn?.addEventListener("click", () => {
//     signupModal.classList.add("active");
// });

// // Close Signup
// closeSignup?.addEventListener("click", () => {
//     signupModal.classList.remove("active");
// });

// // Open Login
// loginBtn?.addEventListener("click", () => {
//     loginModal.classList.add("active");
// });

// // Close Login
// closeLogin?.addEventListener("click", () => {
//     loginModal.classList.remove("active");
// });

// // Switch Signup -> Login
// openLogin?.addEventListener("click", () => {
//     signupModal.classList.remove("active");
//     loginModal.classList.add("active");
// });

// // Switch Login -> Signup
// openSignup?.addEventListener("click", () => {
//     loginModal.classList.remove("active");
//     signupModal.classList.add("active");
// });


// // Close modal when clicking outside
// signupModal?.addEventListener("click", (e) => {
//     if (e.target === signupModal) {
//         signupModal.classList.remove("active");
//     }
// });

// loginModal?.addEventListener("click", (e) => {
//     if (e.target === loginModal) {
//         loginModal.classList.remove("active");
//     }
// });