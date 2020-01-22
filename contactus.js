document.addEventListener("DOMContentLoaded", init);

function init()
{
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
      msg.innerText = "name box is empty";
    }
    else if(name.length != 0)
    {
      msg.style = "display:none";
    }





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
