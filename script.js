
// kullanılacak button vs ye ulaşmaca

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const ul = document.querySelector('.ul');
const li = document.querySelector('.linin');
const deleteall = document.querySelector('.delete-all');
const items = ['item 1', 'item 2','item 3']

// event atıyıcaz yani basınca şu fonksiyonu çalıştır gibi

loadItem();
eventListener();

function eventListener(){

btn.addEventListener('click',addnewItem);
ul.addEventListener('click',deleteItem);
deleteall.addEventListener('click',deleteAll);

}

function loadItem(){
    items.forEach(function(item){
        createItem(item);
    })

}

function createItem(gelentext){

    const li= document.createElement('li');
    li.className='linin';
    li.appendChild(document.createTextNode(gelentext));


    const a= document.createElement('a');
    a.setAttribute('href','#');
    a.innerHTML='<i class="fa-solid fa-x x"></i>';

    li.appendChild(a);
    ul.appendChild(li);

    


}


function addnewItem(){

    if(input.value === ''){
        alert('bir metin giriniz');
        
    }

    else{
        createItem(input.value);
        input.value='';
    }

    
}

function deleteItem(tikladiginyer){
    if(tikladiginyer.target.className ==='fa-solid fa-x x'){

        alert('bu öğe silinsin mi ?');

tikladiginyer.target.parentElement.parentElement.remove();
        
    }

}

function deleteAll(tikladiginyer){
    if(tikladiginyer.target === deleteall){
        alert('hepsini silmek istiyor musunuz ?');
        ul.innerHTML='';
    }

}