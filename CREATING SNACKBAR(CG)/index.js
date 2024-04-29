function myfunction(){
    var x=document.getElementById("snakbar")

    x.className="show";

    setTimeout(function(){x.className=
        x.className.replace("show"," ")
    },2000)
    
}