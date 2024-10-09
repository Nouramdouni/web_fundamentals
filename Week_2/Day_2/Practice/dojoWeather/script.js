function display(){
    alert("loding weather report..... ");
}
function delet(element){
    var a=document.querySelector(element)
    a.remove();
}
function changeTemp() {
    arr=["f1","f2","f3","f4","f5","f6","f7","f8"]
    for(var i=0;i<=arr.length;i++){
        changetofahrenheit(arr[i])
    }
}
function changetofahrenheit(id){
    var nb=document.getElementById(id);
    nb.innerText=Math.floor((nb.innerText)*9/5+32);
}