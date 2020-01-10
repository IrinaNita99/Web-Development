function myFunction() {
	alert("Congratulation!You just won a 10% voucher");
  }

  //CHANGE COLOR OF A TEXT
  var nIntervId;
 
  function changeColor() {
	nIntervId = setInterval(flashText, 1000);
  }

  function flashText() {
	var oElem = document.getElementById('h3');
	oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
	// oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
  }

  function stopTextColor() {
	clearInterval(nIntervId);
  }  

  // ADD ANIMATION
   const element=document.querySelector('.row');
   element.classList.add('animated','tada');


   form1.addEventListener('submit',runEvent);
   function runEvent(e){
     e.preventDefault(); 
  }

  form2.addEventListener('submit',runEvent);
   function runEvent(e){
     e.preventDefault(); 
  }

  //PASSWORD VALIDATION USING REGEX
//To check a password between 6 to 20 characters which contain at
// least one numeric digit, one uppercase and
// one lowercase letter	

document.getElementById('reg_password').addEventListener("keypress",function(e){
	let key=e.which || e.keyCode;
	if (key==13){
		let inputText=document.forms['form1'].elements['reg_password'].value;
		let passFormat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(inputText.match(passFormat)){
      document.forms['form1'].elements['reg_password'].focus();
			return true;
		}
		else{
      document.forms['form1'].elements['reg_password'].focus();
			 Swal.fire({
			 	icon:'warning',
			 	title:'Oops...',
			 	text:'Your password must contain at least one numeric digit,one uppercase and one lowercase',
       })
			return false;
		}

	}
});

document.getElementById('reg_password_confirm').addEventListener("keypress",function(e){
	let key=e.which || e.keyCode;
	if (key==13){
		let inputText=document.forms['form1'].elements['reg_password_confirm'].value;
		let passFormat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(inputText.match(passFormat)){
			document.forms['form1'].elements['reg_password_confirm'].focus();
			return true;
		}
		else{
			document.forms['form1'].elements['reg_password_confirm'].focus();
			 Swal.fire({
			 	icon:'warning',
			 	title:'Oops...',
			 	text:'Your password must contain at least one numeric digit,one uppercase and one lowercase',
       })
			return false;
		}

	}
});

//EMAIL VALIDATION
document.getElementById('reg_email').addEventListener("keypress",function(e){
	let key=e.which || e.keyCode;
	if (key==13){
		let inputText2=document.forms['form1'].elements['reg_email'].value;
		let mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(inputText2.match(mailFormat)){
			document.forms['form1'].elements['reg_email'].focus();
			return true;
		}
		else{
			document.forms['form1'].elements['reg_email'].focus();
			Swal.fire({
				icon:'warning',
				title:'Oops...',
				text:'Wrong match',
			})
			return false;
		}

	}
});


function showRegisterForm(){
  console.log('keypress');
  document.getElementById('display').style.display="block";
}