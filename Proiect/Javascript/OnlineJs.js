var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

var button=document.getElementById('id1');
button.addEventListener('click',AddItemCharm);



// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

//NU MERGE
function AddItemCharm(f){
    f.preventDefault();
    var newItem1 = document.getElementById('id1').value;
    document.getElementById('id1').textContent='Selected';
    console.log(newItem1);
    var li1 = document.createElement('li');
    li1.className = 'list-group-item';
    li1.appendChild(document.createTextNode(newItem1));
}


//video
function myFunction() {
  var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src","video/holiday.mp4");
  } else {
    x.setAttribute("src","video/holiday.ogg");
  }

  x.setAttribute("width", "320");
  x.setAttribute("height", "240");
  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}

