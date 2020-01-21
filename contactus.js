ocument.addEventListener("DOMContentLoaded",init);



function init()
{
document.getElementById("btn-send").addEventListener("click",validateNames);
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