let like = document.querySelector("i");
let cont =document.querySelector("#container")
let ctr = 0;
cont.addEventListener("dblclick",function(){
    like.style.transform="translate(-50%,-50%) scale(2)";
    ctr = ctr + 1;
    console.log("heart added")
    if(ctr == 1){
        setTimeout(removeHeart,1100);
    }
    function removeHeart(){
        like.style.transform="translate(-50%,-50%) scale(0)";
        ctr = ctr - 1;
        console.log("heart removed")
    }
    
})
