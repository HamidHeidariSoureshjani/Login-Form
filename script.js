const inputUsername = document.querySelector(".user-input");
const inputPassword = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".login-button");

signinBtn.addEventListener("click" , signin);

function signin(event){
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = inputUsername.value;
    const passwordValue = inputPassword.value;
    let ifSenddata = true;
    
    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1){
        usernameMsg.innerHTML = "Please Enter a Valid username!";
        ifSenddata = false;
    }

    if(passwordValue.length === 0){
        passwordMsg.innerText = "Please Enter a Password!"
        ifSenddata = false;
    }else if(passwordValue.length <= 4){
        passwordMsg.innerText = "Your Password is too Short!"
        ifSenddata = false;
    }

    if(ifSenddata){
        const body = JSON.stringify({
            username : usernameValue,
            password: passwordValue,
        });
        const headers = {
            "Content-type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts' ,{
            method:"POST",
            body: body,
            headres:headers
        })
        .then(response => {
            if(response.ok){
                sigininMsg.innerText = "You Signed in Successfully"
            }
        })
    }
}