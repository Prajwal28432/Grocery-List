let input= document.getElementById('input-text');
let btn = document.getElementById('btn')
let list = document.getElementById('list')
let i=0;
btn.addEventListener('click',function(){
 let item = document.createElement('div');

 let itemName =document.createElement('div');
 let modifier = document.createElement('div');
 let deleteBtn =document.getElementsByClassName('item-delete'); 
 
if(!input.value){
        return 0;
    }
    else{
      let parent= item.classList.add('items');
       itemName.classList.add('item-name');
        itemName.innerHTML = `${input.value}`  
        modifier.innerHTML=`<div class="item-modifier">
        
        <i class="fa-solid fa-trash item-delete"></i>
    </div>`;
    }
    item.appendChild(modifier);
item.appendChild(itemName);
list.appendChild(item);
input.value="";

})
list.addEventListener('click',function(event){
    let target = event.target.tagName;
    let item = event.target.parentElement.parentElement;
    if(target=='I'){
    item.parentElement.remove();
    }
    else{
        console.log("false");
    }
})