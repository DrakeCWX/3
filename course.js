//Drake/Wenxing Chen. This script is to verify whether the information entered by the customer meets our requirements (the name and address cannot be blank, and the age and telephone number must be numbers), and the customer must enter the information step by step from firstname.
function validateform(){  
    var firstname=document.myform.firstname.value;  
    var lastname=document.myform.lastname.value;
    var address=document.myform.address.value;  
    var age=document.myform.age.value;
    var telephonenumber=document.myform.telephonenumber.value;
    
    
    if (firstname==null || firstname==""){  
      alert("First name can't be blank");  
      return false;}
    else if (lastname==null || lastname==""){  
      alert("Last name can't be blank");  
      return false;}  
    else if (address==null || address==""){  
        alert("address can't be blank");  
        return false;}
    else if (isNaN(age)){
      document.getElementById("numloc1").innerHTML="Please enter numeric digits only";
      return false;}
    else if (isNaN(telephonenumber)){
      document.getElementById("numloc2").innerHTML="Please enter numeric digits only";
      return false;}
    
    }