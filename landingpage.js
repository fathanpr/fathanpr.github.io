let bg1 = document.getElementsByClassName("background")[0];
let bln = document.getElementsByClassName("bulan")[0];
let gdg = document.getElementsByClassName("gedung")[0];
let pgr = document.getElementsByClassName("pager")[0];
let mkt = document.getElementsByClassName("makoto")[0];
let rmh = document.getElementsByClassName("rumah")[0];
let tls = document.querySelector("#landing h1");

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    
    bln.style.bottom = value*0.2 + "px";
    bln.style.right = value*0.2 + "px";

    tls.style.bottom= value*0.9 + "px";
    gdg.style.right = value*0.1 + "px";

    pgr.style.right= value*0.1 + "px";
    rmh.style.left= value*0.08+"px";

    mkt.style.top = value*0.05 + "px";
    mkt.style.left = value*0.08 + "px";
})