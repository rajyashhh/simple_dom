let adbtn = document.querySelector("#add");
adbtn.addEventListener("click", adder);
let isStatus=document.querySelector("h5");
var ctr=0;
function adder(){
    if(ctr==0){
        isStatus.innerText = "Friends";
        isStatus.style.color = "green";
        adbtn.innerText = "Remove";
        ctr = ctr+1;
    }
    else{
        isStatus.innerText = "Stranger";
        isStatus.style.color = "red";
        adbtn.innerText = "Add Friend";
        ctr = ctr-1;
    }

}
 