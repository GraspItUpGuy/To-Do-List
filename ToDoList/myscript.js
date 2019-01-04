//alert (' js is linked')

window.onload = function (){
    
    let ul = document.getElementById('list')
    let li // global 

   

    let addbutton = document.getElementById('add')
    let removebutton = document.getElementById('remove')
    let clearbutton = document.getElementById('removeall')
    
    addbutton.onclick = function (){
        //console.log('add button clicked');
        let input = document.getElementById('input')
        let inputvalue = input.value
        let textnode = document.createTextNode(inputvalue) 
        
        if (inputvalue === ''){
            
           // alert ('can not enter empty to do')
            let p = document.createElement('p')
            p.innerText = ' Can not enter empty to do, add some value to it'
            let message = p.innerText
            alert(message)
            return false;
        } else {
            li = document.createElement('li') // create an li 
            // creating in the sequence as we have defined in the html
            let checkbox  = document.createElement('input') // create checkbox
                                                       // of input type
            checkbox.type = 'checkbox' // type = checkbox
            checkbox.setAttribute('id', 'check') // set id of checkbox = check

            // now time to create label
            let label = document.createElement('label')
            // set some properties for label using set Attribute but we have
            // not defined them in html


            // add the elements created above to the web page
            ul.appendChild(label)
            li.appendChild(checkbox)
            label.appendChild(textnode)
            li.appendChild(label)

            ul.insertBefore(li, ul.childNodes[0])
            // add li in ul , childNodes[0] so as to add tem at the top
            // we can also append them at the end using appendChild()
            
            //li.className = 'visual';
                    // in order to give some visual effects
            setTimeout(() => {
                li.className = 'visual';
            }, 10);
            
            input.value = ''
           
            
        }
    }

    clearbutton.onclick = function (){
        //console.log('clear button pressed')
         li = ul.children
         for (let index = 0; index < li.length; index++) {
             while(li[index] && li[index].children[0]){
                 ul.removeChild(li[index])
             }
             
         }
        


    }

    removebutton.onclick = function(){
          // console.log('remove button clicked')
          li = ul.children // li  is an object of ul that contains all the values 
          //  ul
          //console.log(li)
          //console.log(typeof(li))

          for (let index = 0; index < li.length; index++) {
              //console.log(li[index])
              while (li[index] && li[index].children[0].checked) {
                    ul.removeChild(li[index])
                  
              }

              
          }
    }

    }
