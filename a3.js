function openPopup(){
document.getElementById("popup").style.display="flex";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

window.onclick=function(e){
let popup=document.getElementById("popup");
if(e.target==popup){
popup.style.display="none";
}
}

document.getElementById("enrollForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let course=document.getElementById("course").value;

let valid=true;

if(name==""){
document.getElementById("nameError").innerText="Enter your name";
valid=false;
}else{
document.getElementById("nameError").innerText="";
}

if(email==""){
document.getElementById("emailError").innerText="Enter your email";
valid=false;
}else{
document.getElementById("emailError").innerText="";
}

if(phone==""){
document.getElementById("phoneError").innerText="Enter phone number";
valid=false;
}else{
document.getElementById("phoneError").innerText="";
}

if(course==""){
document.getElementById("courseError").innerText="Select course";
valid=false;
}else{
document.getElementById("courseError").innerText="";
}

if(valid){
alert("Form Submitted Successfully!");
closePopup();
}

})