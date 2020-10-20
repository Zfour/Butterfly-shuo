function shuovisualchange(){
  let obt=document.getElementById("shuovisualchange");
  let odiv= $(".power").css("display");

  
    if(odiv == "none"){
       $(".power").css({"display":"inline"});
      obt.innerHTML="隐藏";
    }
    else{
     $(".power").css({"display":"none"});
      obt.innerHTML="编辑";
    }
 
}
