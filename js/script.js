const getElement = (sele)=>{
    let ele = document.querySelector(sele);
    if(ele) return ele;
    throw Error(
        `${sele} not found`
    )
}

const toggleBtn = getElement('#toggleBtn');

toggleBtn.addEventListener('click',function(){
    let navItemsContainer = getElement('.nav-items-container')
    addClass(navItemsContainer);

})

function addClass(ele){
    ele.classList.toggle('show-links');
}