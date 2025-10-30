function validate() {
  let age=document.getElementById("Age").value;
  let name=document.getElementById("Name").value;
  let msg=document.getElementById("Message");
  msg.textContent="";
  
  if(name==""){
    msg.textContent=("Name cannot be empty");
    return false;
  }
  
  if(age<18 && age.length!=0){
    msg.textContent=("Age must be greater than 18");
    return false;
  }
    alert("Form submitted successfully");
  return true;
}