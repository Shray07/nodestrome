let arr = [];

function User_email(email){

    this.email = email;

} 

function submitProduct(e){
   e.preventDefault(); 
   let form = document.getElementById("user-form");
    let email = form.email.value;
    console.log(email)

      let p = new User_email(email);
      arr.push(p);
      localStorage.setItem('userEmail',JSON.stringify(arr));
      console.log(arr);
      window.location.href = 'Signup.html'

}



function  validationnn(e){

  if(document.getElementById("bottom_email").value == '' )
{
  alert("Field Required")
}else{
  submitDetails(event);
}
}

function  validation(e){

  if(document.getElementById("email").value == '')
{
  alert("Email Required")
}else{
  submitProduct(event);
}
}