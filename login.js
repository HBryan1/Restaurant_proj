
//target alert div
var alertmsg = document.getElementById('alertmsg');

//function for form validation
function validateForm() {
  //getting value of email input
  var loginEmail = document.forms["login-form"]["defaultLoginFormEmail"].value;
  //getting value of password input
  var loginPassword = document.forms["login-form"]["defaultLoginFormPassword"].value;
  
  //check for empty email and password
  if(loginEmail == "" && loginPassword == ""){
    alertmsg.innerHTML = "<div class='alert alert-danger' role='alert'>Email and Password cannot be empty</div>";
    return false;
  }
  else if(loginEmail == ""){
    alertmsg.innerHTML = "<div class='alert alert-danger' role='alert'>Email cannot be empty</div>";
    return false;
  }
  else if(loginPassword == ""){
    alertmsg.innerHTML = "<div class='alert alert-danger' role='alert'>Password cannot be empty</div>";
    return false;
  }
  else{
    alertmsg.innerHTML = "";
    return true;
  }
}