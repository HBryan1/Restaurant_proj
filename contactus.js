document.addEventListener("DOMContentLoaded", init);

function init()
{
  let alert1 = "";
  let alert2 = "";
  let alert3 = "";
  let alert4 = "";
  let btn = document.getElementById("submit");
  let msg = document.getElementById("alertmsg");
  msg.setAttribute("class", "alert alert-primary");
  msg.style = "display:none";
  btn.onclick = submitform;

  function submitform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(name.length == 0)
    {
      msg.style = "display:block";
      alert1 = " name box ";
    }
    else if(name.length != 0)
    {
      msg.style = "display:none";
      alert1 = " ";
    }

    if(email.length == 0)
    {
      msg.style = "display:block";
      alert2 = " email box ";
    }
    else if(email.length != 0)
    {
      msg.style = "display:none";
      alert2 = " ";
    }

if(subject.length == 0)
    {
      msg.style = "display:block";
      alert3 = " Subject box ";
    }
    else if(subject.length != 0)
    {
      msg.style = "display:none";
      alert3 = " ";
    }
if(message.length == 0)
    {
      msg.style = "display:block";
      alert4 = " Message box ";
    }
    else if(message.length != 0)
    {
      msg.style = "display:none";
      alert4 = " ";
    }
msg.innerHTML = alert1 + alert2 + alert3 + alert4 + " is empty";
console.log(alert1 + alert2 + alert3 + alert4 + " is empty");



  }
   function validateNames()
   {
      console.log("validateNames is fired!!!");
      let strAlert="";
      strAlert=validateFullName(document.getElementById("name").value , document.getElementById("email").value) ;

      function validateFullName(field1,field2)
      {
          console.log("validateNames is fired!!!");
          if(field1.length == 0 || field2.length == 0 )
              return "Name or email cannot be empty\n";
          else
              return "";

    }
      event.preventDefault();
      document.getElementById("alertmsg").innerText=strAlert;
      document.getElementById("alertmsg").style.display="block";
      document.getElementById("alertmsg").setAttribute("class", "alert alert-success");
  }
}

