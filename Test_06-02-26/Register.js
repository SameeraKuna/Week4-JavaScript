let users = [];

function registerUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

//To validate entries
    if (name.value === "" || email.value === "" || password.value === "") {
          document.getElementById("error").textContent = "Please fill all the details!";
          return;
        }
    document.getElementById("error").textContent = "";

    let user = {name:name.value, email:email.value, password:password.value};
    users.push(user);
    pushLocal();
    // firstDirectLogin();
    window.location.href = "Homepage.html";

    document.getElementById("name").value = ""; 
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    }

function pushLocal(){
    localStorage.setItem("user",JSON.stringify(users));
    localStorage.getItem(JSON.parse(users));
}




