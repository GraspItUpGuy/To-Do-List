 //alert('js is linked')

let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

let removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

let ul = document.getElementById('list')
let li; // global so that it can be used later
let checkbox ;

function addItem(){
    //console.log('add button clicked');
   let input = document.getElementById('input')
   let item  = input.value;
   ul =  document.getElementById('list')
   let textnode = document.createTextNode(item)

    if (item ===''){
        return false;
        // add a p tag and assign a value of 'enter your todo'
    } else {
        // create li
        li = document.createElement('li')
        // create checkbox
         checkbox = document.createElement('input')
         checkbox.type = 'checkbox';
         // setAtribute on mdn
         checkbox.setAttribute('id', 'check')

         // create label
         let label = document.createElement('label');
         //label.setAttribute('for', 'item') // optional

         // add these elements on webpage
         ul.appendChild(label);
         li.appendChild(checkbox);
         label.appendChild(textnode);
         li.appendChild(label);
         ul.insertBefore(li,ul.childNodes[0])  // what to add and where to add
         
         
            li.className = 'visual'

         
         input.value = ''
    }
}


function removeItem(){
    // console.log('remove button clicked');
    li = ul.children //  The ParentNode property children is a read-only property 
    // that returns a live HTMLCollection which contains all of the child elements of 
    // the node upon which it was called.
    
    // 
    for (let index = 0; index < li.length; index++) {
        // loop for going throug each element
        const element = li[index];
       // loop for going through the length of li
       while (li[index] && li[index].children[0].checked) {
           // condition -> it should be on the present index as well as the inside index
           // then do this while loop
           ul.removeChild(li[index])
           
       }
        
    }
}

