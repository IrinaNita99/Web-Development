var btn=document.getElementById('btn').addEventListener('click',buttonClick);
function buttonClick(){
document.getElementById('btn').textContent='Changed';
}

/////////////////////NU MERGE
var buttons=document.querySelectorAll('.btn');
buttons.addEventListener('click',AddItemCharm);

function AddItemCharm(){
    for (var i = 0; i < buttons.length; i++) {
        console.log('Button: '+ buttons[i].id);
        
    }
}