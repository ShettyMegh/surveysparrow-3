const getElement = (sele)=>{
    let ele = document.querySelector(sele);
    if(ele) return ele;
    throw Error(
        `${sele} not found`
    )
}

const getElements = (sele)=>{
    let ele = document.querySelectorAll(sele);
    if(ele) return ele;
    throw Error(
        `${sele} not found`
    )
}



// nav toggle button
const toggleBtn = getElement('#toggleBtn');

toggleBtn.addEventListener('click',function(){
    let navItemsContainer = getElement('.nav-items-container')
    addClass(navItemsContainer);

})

function addClass(ele){
    ele.classList.toggle('show-links');
}



// collapse bar
const collapseItems = getElements('.collapse-item');
collapseItems.forEach((collapseItem)=>{
    collapseItem.addEventListener('click',function(){
        removeClass(collapseItems,'collapse-active')
        this.classList.add('collapse-active');
        const collapseDesc = document.querySelector('.collapse-active .collapse-desc');
        collapseDesc.style.height = collapseDesc.scrollHeight +"px";
    })
})



function removeClass(elements,className){
    const collapseDesc = document.querySelector(`.${className} .collapse-desc`);
    collapseDesc.style.height = "0px";
    elements.forEach((element)=>{
        element.classList.remove(className);
    })
}