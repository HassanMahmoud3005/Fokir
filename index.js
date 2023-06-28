let ulo = document.getElementById("main-ul")
let nvb = document.getElementById("leader")

window.onscroll = function()
{

  
if(window.scrollY > 0){
    nvb.style.opacity = "1"
}else{
    nvb.style.opacity= "0"


}

    if(window.scrollY < 0){
        ulo.style.backgroundColor = "#333333";
        
    }else{
        ulo.style.backgroundColor = "transparent"
    }



}



