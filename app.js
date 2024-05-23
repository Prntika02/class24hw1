let arr =["Bangladesh Time--", "Dhaka City Time", "Chittagong City Time"];
i = 0;
setInterval(function(){
    if(i<arr.length){
        document.title= arr[i]; i++;  
    }else{
        i=0,
        document.title= arr[i];
    }
},1000)



let getHour = document.querySelector(".hour");
let getMin = document.querySelector(".min");
let getSec = document.querySelector(".sec");



setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    getHour.innerHTML = hour;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    console.log(min)
},1000)