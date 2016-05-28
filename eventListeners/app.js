var btn = document.getElementById("btn");
var holder = document.getElementById("holder");

btn.addEventListener("click", eventFunction);


var content = "<p>officia deserunt mollit anim id est laborum.</p>";

function eventFunction(e){
  console.log(e);
  console.log("event fired");
  if (holder.innerHTML === "") {
    holder.innerHTML = content;
  }
  else if (holder.innerHTML !== "") {
    holder.innerHTML = "";
  }
}
