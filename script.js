function zamow(){
    var nrksztaltu = document.getElementById("nrksztaltu").value;
    var wybrany = document.getElementById("wybrany");
    var tekst = "Zamówiłeś żelka: ";
    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;
    var kolor = document.getElementById("kolor");
    
    if(nrksztaltu==1){
        tekst+="miś";
    }else if(nrksztaltu==2){tekst+="żabka";
    }else if (nrksztaltu==3){tekst+="serce";
    }else{
        tekst+="inny kształt";}
    
    wybrany.innerHTML=tekst;
    kolor.style.backgroundColor="rgb("+R+","+G+","+B+")";
}
