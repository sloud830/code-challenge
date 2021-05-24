  function gettext(){
    let s = document.getElementById("temp3").value;
    if(s > 20 || s < 0){
        alert("Hãy nhập một số từ 1 đến 20")
    }
    else if (s == 12){
        alert("Chúc mừng,số may mắn là số 12");
    }
    else{
        alert ("Số may mắn là 12,chúc bạn may mắn lần sau")
    }  
}
