var subMenu = document.getElementsByClassName("sub-menu");
for(var i=0; i<subMenu.length; i++){
  subMenu[i].addEventListener("click", showMenu);
}

function showMenu(){
  var listMenu = this.getElementsByClassName("item-list")[0];
  if(listMenu.classList.contains("hide")){
    listMenu.classList.remove("hide");
    listMenu.classList.add("show");
  }else{
    listMenu.classList.remove("show");
    listMenu.classList.add("hide");
  }
}
