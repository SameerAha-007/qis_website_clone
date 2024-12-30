const inp = document.getElementsByTagName("input")
for (let i=0; i<inp.length;i++){
    const ele=inp[i];
    ele.addEventListener("mouseover",function(){
        ele.style.boxShadow="4px 4px 10px aliceblue";
        ele.style.backgroundColor="rgba(70, 67, 67, 0.248)";
    })
    ele.addEventListener("mouseleave",function(){
        ele.style.boxShadow="";
        ele.style.backgroundColor="";
    })
}

