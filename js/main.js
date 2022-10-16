var email = document.getElementById('email');
var password = document.getElementById('password');


function Login(){

    // Vaildation inputs
    let username_DB = localStorage.getItem("username");
    let email_DB = localStorage.getItem("email");
    let password_DB = localStorage.getItem("password");

    if(email_DB == email.value && password_DB == password.value){
        
        window.location = 'home.html';
        

    }else{
        alert('plase check your email or password');
    }


}



let username_reg = document.getElementById('username_reg');
let email_reg = document.getElementById('email_reg');
let password_reg = document.getElementById('password_reg');

function register(){
    
    // Vaildation inputs
    let empty = document.getElementById('empty');
    let lessThan3 = document.getElementById('lessThan3');

    let username_leng = username_reg.value;

    if(username_reg.value == ''){

        empty.style.display = "block";

    } else if(username_leng.length < 3){

        lessThan3.style.display = "block"; 

    }else{

        window.localStorage.setItem('username' , username_reg.value);
        window.localStorage.setItem('email' , email_reg.value);
        window.localStorage.setItem('password', password_reg.value);
        window.location="index.html";

    }

}


