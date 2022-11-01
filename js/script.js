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
console.log(collapseItems);
collapseItems.forEach((collapseItem)=>{
    collapseItem.addEventListener('click',function(){
        removeClass(collapseItems,'collapse-active')
        let className = this.className;
        let headerLogo = getElement(`.${className} .collapse-header p`)
        // headerLogo.style.transform = "rotate(30deg)";
        this.classList.toggle('collapse-active');
    })
})

function removeClass(elements,className){
    elements.forEach((element)=>{
        element.classList.remove(className);
    })
}