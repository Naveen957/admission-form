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
    profile:'',
}
document.getElementById('submit').addEventListener('click',print)
function print(){
  person.fullname=document.getElementById('fullname').value;
  // console.log(person.fullname);
  person.dateofbirth=document.getElementById('dob').value;
  person.gender=document.getElementById('gender').value;
  person.adress=document.getElementById('address').value;
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
  person.profile=document.getElementById("imageUpload").value;



let sampleone=`<div style="height:800px; width:100%;  padding:30px 60px 0px 60px; text-align: justify;">
                     profile = ${ person.profile} <br> Student name = ${person.fullname}<br>Date fo birth = ${person.dateofbirth}<br> Gender = ${person.gender}<br>
                      Adress = ${person.adress}<br> Pincode = ${person.pincode}<br> Phone = ${person.phone}<br> Email = ${ person.email}<br>
                      School =${person.school}<br> Telent =${person.talent}<br> Parentname = ${person.parentname}<br> parentrelation = ${person.parentrelation}<br>
                      parentphone = ${person.parentphone}<br> emergencyrelation = ${person.emergenaayrelation}<br> emergencynumber = ${person.emergencynumber}<br>
                       alternatephone = ${person.alternatephone}<br></div>`


document.getElementById('okay').innerHTML=sampleone;

var printContents = document.getElementById('okay').innerHTML;
   var originalContents = document.body.innerHTML;
   document.body.innerHTML = printContents;
   window.print();
   document.body.innerHTML = originalContents;
   location.reload();
}
// Validation


// document.getElementById('myForm').addEventListener('submit', function(event) {
//   // Fetching error elements
//   let nameError = document.getElementById('nameerror');
//   let dateofbirthError = document.getElementById('dateofbirtherror');
//   let genderError = document.getElementById('gendererror');
//   let adressError = document.getElementById('adresserror');
//   let pincodeError = document.getElementById('pincodeerror');
//   let phoneError = document.getElementById('phoneerror');
//   let emailError = document.getElementById('emailerror');
//   let schoolError = document.getElementById('schoolerror');
//   let talentError = document.getElementById('talenterror');

//   // Clear previous error messages
//   nameError.textContent = '';
//   dateofbirthError.textContent = '';
//   genderError.textContent = '';
//   adressError.textContent = '';
//   pincodeError.textContent = '';
//   phoneError.textContent = '';
//   emailError.textContent = '';
//   schoolError.textContent = '';
//   talentError.textContent = '';

//   // Get form values
//   let person = {
//     fullname: document.getElementById('fullname').value,
//     dateofbirth: document.getElementById('dateofbirth').value,
//     gender: document.getElementById('gender').value,
//     adress: document.getElementById('adress').value,
//     pincode: document.getElementById('pincode').value,
//     phone: document.getElementById('phone').value,
//     email: document.getElementById('email').value,
//     school: document.getElementById('school').value,
//     talent: document.getElementById('talent').value
//   };

//   // Validation flags
//   let valid = true;

//   // Perform validation
//   if (!/^[a-zA-Z\s.]+$/.test(person.fullname)) {
//     nameError.textContent = '* Invalid name';
//     valid = false;
//   }

//   else if (!/^\d{4}-\d{2}-\d{2}$/.test(person.dateofbirth)) {
//     dateofbirthError.textContent = '* Invalid date of birth (YYYY-MM-DD)';
//     valid = false;
//   }

//   else if (!/^[a-zA-Z\s]+$/.test(person.gender)) {
//     genderError.textContent = '* Invalid gender';
//     valid = false;
//   }

//   else if (!/^[a-zA-Z0-9\s,./]+$/.test(person.adress)) {
//     adressError.textContent = '* Invalid address';
//     valid = false;
//   }

//   else if (!/^\d{6}$/.test(person.pincode)) {
//     pincodeError.textContent = '* Invalid pincode';
//     valid = false;
//   }

//   else if (!/^\d{10}$/.test(person.phone)) {
//     phoneError.textContent = '* Invalid phone number';
//     valid = false;
//   }

//   else if (!/^\S+@\S+\.\S+$/.test(person.email)) {
//     emailError.textContent = '* Invalid email';
//     valid = false;
//   }

//   else if (!/^[a-zA-Z0-9\s]+$/.test(person.school)) {
//     schoolError.textContent = '* Invalid school name';
//     valid = false;
//   }

//   else if (!/^[a-zA-Z\s]+$/.test(person.talent)) {
//     talentError.textContent = '* Invalid talent';
//     valid = false;
//   }

//   // Prevent form submission if validation fails
//   else if (!valid) {
//     event.preventDefault();
//   }
// });




// const imageInput = document.getElementById('image');
//   if (imageInput.files.length > 0) {
//     person.image = imageInput.files[0]; 
//   }

const imageInput = document.getElementById('imageUpload');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    }
    reader.readAsDataURL(file);
  }
  });
