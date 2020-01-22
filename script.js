document.addEventListener("DOMContentLoaded", init);

function init() {
  let count = 0;
  let alert1 = "";
  let alert2 = "";
  let alert3 = "";
  let alert4 = "";
  let alert5 = "";
  let msg = document.getElementById("alertmsg");
  let table = document.getElementById("tbody");
  let clear = document.getElementById("clear");
  let submit = document.getElementById("submit");
  let img1 = document.getElementById("1");
  let img2 = document.getElementById("2");
  let img3 = document.getElementById("3");
  let img4 = document.getElementById("4");
  let img5 = document.getElementById("5");
  let img6 = document.getElementById("6");
  let img7 = document.getElementById("7");
  let img8 = document.getElementById("8");
  let img9 = document.getElementById("9");
  let img10 = document.getElementById("10");
  let img11 = document.getElementById("11");
  let img12 = document.getElementById("12");
  msg.setAttribute("class", "alert alert-primary");
  clear.onclick = clearList;
  submit.onclick = submitOrder;
  msg.style = "display:none";

  img1.ondblclick = selected;
  img2.ondblclick = selected;
  img3.ondblclick = selected;
  img4.ondblclick = selected;
  img5.ondblclick = selected;
  img6.ondblclick = selected;
  img7.ondblclick = selected;
  img8.ondblclick = selected;
  img9.ondblclick = selected;
  img10.ondblclick = selected;
  img11.ondblclick = selected;
  img12.ondblclick = selected;
  let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  let items = ["Coffee", "Tea", "Juice", "Smoothie", "Coca-cola", "Sprite", "Burrito", "Burger", "Fries", "Chicken Sandwich", "Tacos", "Chicken Nuggets"];

  // select items function
  function selected(slctd){
    let tr = document.createElement("tr");
    let itemStr = "";
    slctd.target.style.border = "thick solid #00cccc";
    for(i = 0; i < imgs.length; i++){
      if( slctd.target === imgs[i]){
        count++;
        itemStr = "<tr><td>" + count + "</td><td>" + items[i] + "</td><td> <input type='text'> </td></tr>";
        console.log(itemStr);
      }
    }
    tr.innerHTML = itemStr;
    table.appendChild(tr);
    return count;
  }

  // clear all function
  function clearList(){
    num = count;
    for(i = 1; i <= num; i++){
      tr = table.querySelector("tr");
      table.removeChild(tr);
      count--;
    }
    for(i = 0; i < imgs.length; i++){
      imgs[i].style.border = "";
    }
    return count;
  }

  //submit order function
  function submitOrder() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let zip = document.getElementById("zip").value;

      if(name.length == 0){
        msg.style = "display:block";
        alert1 = " name box ";
      }
      else if(name.length != 0){
        alert1 = "";
      }

      if(email.length == 0){
        msg.style = "display:block";
        alert2 = " email box ";
      }
      else if(email.length != 0){
        alert2 = "";
      }

      if(phone.length == 0){
        msg.style = "display:block";
        alert3 = " phone box ";
      }
      else if(phone.length != 0){
        alert3 = "";
      }
      if(address.length == 0){
        msg.style = "display:block";
        alert4 = " address box ";
      }
      else if(address.length != 0){
        alert4 = "";
      }
   if(zip.length == 0){
        msg.style = "display:block";
        alert5 = " zip box ";
      }
      else if(zip.length != 0){
        alert5 = "";
      }

    if( (alert1.length == 0) && (alert2.length == 0) && (alert3.length == 0) && (alert4.length == 0) && (alert5.length == 0)  ){
      if(count > 0){
        clearList();
        name.innerHTML ="";
      }
      msg.style = "display:none";
    }
    else {
      msg.innerText = alert1 + alert2 + alert3 + alert4 + alert5 + " is empty";
    }

  }

}
