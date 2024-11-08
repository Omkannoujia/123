// show hide password 
let password_input = document.getElementById("password");
let shpassword = document.getElementById("shpassword").innerText = "show password";
let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("click",()=>{
    if(password_input.type === "password"){
        password_input.type = "text";
        document.getElementById("shpassword").innerText = "hide password";
    }else{
        password_input.type = "password";
        document.getElementById("shpassword").innerText = "show password";
    }
})

// popup forms
let home_btn = document.getElementById("home-btn");
let register_btn = document.getElementById("register-btn");
let login_btn = document.getElementById("login-btn");
let discord_btn = document.getElementById("discord-btn");
let twitch_btn = document.getElementById("twitch-btn");

let register_form = document.getElementById("register-form");
let login_form = document.getElementById("login-form");

home_btn.style.color = "black";

let forgot_password_btn = document.getElementById("forgot-password-btn");
let forgot_password_form = document.getElementById("forgot-password");

register_btn.addEventListener("click",()=>{
    register_form.style.display = "block";
    login_form.style.display = "none";
    register_btn.style.color = "black";
    home_btn.style.color = "white";
    login_btn.style.color = "white";
    forgot_password_form.style.display = "none";

});

login_btn.addEventListener("click",()=>{
    login_form.style.display = "block";
    register_form.style.display = "none";
    login_btn.style.color = "black";
    home_btn.style.color = "white";
    register_btn.style.color = "white";
    forgot_password_form.style.display = "none";

});

home_btn.addEventListener("click",()=>{
    register_form.style.display = "none";
    login_form.style.display = "none";
    login_btn.style.color = "white";
    home_btn.style.color = "black";
    register_btn.style.color = "white";
    forgot_password_form.style.display = "none";
});

discord_btn.addEventListener("click",()=>{
    window.open("https://discord.gg/D249G5mr");
});
twitch_btn.addEventListener("click",()=>{
    window.open("https://www.twitch.tv/OmKannoujia");
});

forgot_password_btn.addEventListener("click",()=>{
    forgot_password_form.style.display = "block";
    login_form.style.display = "none";

});

let register_link_btn = document.getElementById("register-form-link");
let login_link_btn = document.getElementById("login-form-link");

register_link_btn.addEventListener("click",()=>{
    register_form.style.display = "block";
    login_form.style.display = "none";
});
login_link_btn.addEventListener("click",()=>{
    login_form.style.display = "block";
    register_form.style.display = "none";
});

/*clock*/
let clock = document.getElementById("clock");
let hzero = "";
let mzero = "";
let szero = "";
    setInterval(() => {
        let date = new Date();
        let hour =  date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        if(hour === 0){
            hzero = "0";       
        }
        if(hour === 10){
            hzero = "";
        }
        if(minute === 0){
            mzero = "0";
            
        }
        if(minute === 10){
            mzero = "";
        }
        if(second === 0){
            szero = "0";
            
        }
        if(second === 10){
            szero = "";
        }
        clock.innerText = `${hzero}${hour}:${mzero}${minute}:${szero}${second}`;
    },1000);

