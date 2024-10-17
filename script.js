let person={
    fullname:'',
    dateofbirth:'',
    gender:'',
    adress:'',
    pincode:'',
    phone:'',
    email:'',
    school:'',
    talent:'',
    parentname:'',
    parentrelation:'',
    parentphone:'',
    emergencyname:'',
    emergencyrelation:'',
    emergencynumber:'',
    alternatephone:'',
}
document.getElementById('submit').addEventListener('click',print)
function print(){
  person.fullname=document.getElementById('fullname').value;
  person.dateofbirth=document.getElementById('dob').value;
  person.gender=document.getElementById('gender').value;
  person.adress=document.getElementById('adress').value;
  person.pincode=document.getElementById('pincode').value;
  person.phone=document.getElementById('number').value;
  person.email=document.getElementById('email').value;
  person.school=document.getElementById('school').value;
  person.talent=document.getElementById('talent').value;
  person.parentname=document.getElementById('parent-fullname').value;
  person.parentrelation=document.getElementById('parent-relation').value;
  person.parentphone=document.getElementById('parent-phone').value;
  person.emergencyname=document.getElementById("emergency-fullname").value;
  person.emergencyrelation=document.getElementById("emergency-relation").value;
  person.emergencynumber=document.getElementById("emergency-phone").value;
  person.alternatephone=document.getElementById("alternate-phone").value;


  console.log(person);


}

