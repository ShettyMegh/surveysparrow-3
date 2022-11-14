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
let navItemsContainer = getElement('.nav-items-container')

toggleBtn.addEventListener('click',function(){
    toggleNavClass(navItemsContainer);

})

function toggleNavClass(ele){
    ele.classList.toggle('show-links');
}

//close navbar when clicked outside
const mainEle = getElement('#main');
mainEle.addEventListener('click',function(){
    console.log(collapseItems);
    removeNavClass(navItemsContainer);
})

function removeNavClass(ele){
    ele.classList.remove('show-links');
}

//fixed navbar when scrolled
const nav = getElement("#nav");
    window.addEventListener('scroll',function(){
        console.log(this.scrollY);
        let scrollVer = this.scrollY;
        if(scrollVer > 50){
            nav.style.backgroundColor = "rgba(255, 255, 255)";
            nav.style.boxShadow = "-1px 7px 16px -4px rgba(163,163,163,1)"
            return;
        }

        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "-1px 7px 16px -4px rgba(163,163,163,0)"

})





// collapse bar
const collapseItems = getElements('.collapse-item');
collapseItems.forEach((collapseItem)=>{
    collapseItem.addEventListener('click',function(){
        removeClass(collapseItems,'collapse-active')
        this.classList.add('collapse-active');
        const collapseDesc = getElement('.collapse-active .collapse-desc');
        collapseDesc.style.height = collapseDesc.scrollHeight +"px";
    })
})



function removeClass(elements,className){
    const collapseDesc = getElement(`.${className} .collapse-desc`);
    collapseDesc.style.height = "0px";
    elements.forEach((element)=>{
        element.classList.remove(className);
    })
}




