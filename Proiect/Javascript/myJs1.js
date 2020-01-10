var myArr = ["Offers", "Bracelets", "Rings", "Necklace", "Bracelets"];
myArr.push('Earrings');
myArr.push('Charms');
myArr.push('Mc');
myArr.pop();

//parseInt
for(var i=0;i<myArr.length;i++){
	var test1=parseInt(myArr[i]);
	console.log('INT:' +test1);
}

function search() {
	var txt = document.getElementById('txt').value;
	var index = myArr.indexOf(txt);

	if (index !== -1) {
		Swal.fire({
			title: 'We have on this website',
			showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
		});
	} else {
		swal.fire(
			'Error!',
			'We don t have on this website',
			'error'
		);
	}
}


function view(){
  var hege = ["Must have"];
  var stale = ["gifts"];
  var children = hege.concat(stale); 
  document.getElementById("demo").innerHTML = children;
  document.getElementById("demo").style.color="pink";
}


//dinamically alocated audio
var audio1=new Audio;
audio1.src="Beyoncé.mp3";
audio1.setAttribute('id','audio');

//key press audio
document.onkeydown = checkKey;
function checkKey(e) {
 console.log("checkKey");
	if (e.keyCode == '39') {
		//right arrow
		audio1.play();
	}else if(e.keyCode == '37') {
		//left arrow
		audio1.pause();
	}
};


//AUDIO JS,NU MERGE
function audio(){
	var x = document.createElement("AUDIO");

	if (x.canPlayType("audio/mpeg")) {
	  x.setAttribute("src","Beyoncé.mp3");
	} else {
	  x.setAttribute("src","Beyoncé.ogg");
	}
  
	x.setAttribute("controls", "controls");
	document.body.appendChild(x);
}

//onsubmit="return validation();

//email validation using regex
///^[a-zA-Z0-9._-]+:  Means that the email address must begin with alpha-numeric
// characters (both lowercase and uppercase characters are allowed). 
//It may have periods,underscores and hyphens.
// document.getElementById('email').addEventListener("keypress",function(e){
// 	let key=e.which || e.keyCode;
// 	if (key==13){
// 		let inputText2=document.forms['form1'].elements['email'].value;
// 		let mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 		if(inputText2.match(mailFormat)){
// 			// document.forms['form1'].elements['email'].focus();
// 			document.forms['form1'].elements['email'].style.borderColor='green';
// 			return true;
// 		}
// 		else{
// 			// document.forms['form1'].elements['email'].focus();
// 			document.forms['form1'].elements['email'].style.borderColor='red';
// 			Swal.fire({
// 				icon:'warning',
// 				title:'Oops...',
// 				text:'Wrong match',
// 			})
// 			return false;
// 		}

// 	}
// });


//PASSWORD VALIDATION USING REGEX
//To check a password between 6 to 20 characters which contain at
// least one numeric digit, one uppercase and
// one lowercase letter	

// document.getElementById('password').addEventListener("keypress",function(e){
// 	let key=e.which || e.keyCode;
// 	if (key==13){
// 		let inputText=document.forms['form1'].elements['password'].value;
// 		let passFormat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
// 		if(inputText.match(passFormat)){
// 			// document.forms['form1'].elements['password'].focus();
// 			document.forms['form1'].elements['password'].style.borderColor='green';
// 			return true;
// 		}
// 		else{
// 			// document.forms['form1'].elements['password'].focus();
// 			document.forms['form1'].elements['password'].style.borderColor='red';
// 			Swal.fire({
// 				icon:'warning',
// 				title:'Oops...',
// 				text:'Your password must contain at least one numeric digit,one uppercase and one lowercase',
// 			})
// 			return false;
// 		}

// 	}
// });


//math.random
var newDiv=document.createElement('div');
newDiv.id='id1';
newDiv.style.color='red';
newDiv.style.textTransform= 'uppercase';
newDiv.style.fontWeight='bold';
var newDivText=document.createTextNode('There are ' + Math.floor(Math.random()*100)+' people on this page');
newDiv.appendChild(newDivText);

var container=document.querySelector('div .hero-text');
var a=document.querySelector('div h1');
container.insertBefore(newDiv,a);

//schimbare text
window.onload=document.getElementById('text').addEventListener('click', function(){
	document.getElementById('text').textContent='Claim your prize';
	console.log('aadad');
});


//json
var ourRequest=new XMLHttpRequest();
ourRequest.open('get','https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload=function(){
 var ourData=JSON.parse(ourRequest.responseText);
 console.log(ourData[0]);
	}; 
	ourRequest.send();

	//ajax
///API JSON
document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
			console.log('asas');
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then(response => response.json())
                .then(users => {
                    let output = '<h2>Lists of Users</h2>';
                    output += '<ul>';
                    users.forEach(function(user) {
                        output += `
                            <li>
                                ${user.name}
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;
                });
        }
	
const element=document.getElementById('img4');
element.classList.add('animated','bounceInLeft');
const element1=document.getElementById('img3');
element1.classList.add('animated','bounceInRight');
const element2=document.getElementById('img2');
element2.classList.add('animated','bounceInLeft');
const element3=document.getElementById('img5');
element3.classList.add('animated','jackInTheBox');


