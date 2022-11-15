const getElement = (sele)=>{
    let ele = document.querySelector(sele);
    if(ele) return ele;
    return false;
}

const getElements = (sele)=>{
    let ele = document.querySelectorAll(sele);
    if(ele) return ele;
    return false;
}



// nav toggle button
const toggleBtn = getElement('#toggleBtn');
let navItemsContainer = getElement('.nav-items-container')

toggleBtn.addEventListener('click',function(){
    toggleNavClass(navItemsContainer);
    document.querySelector("#toggleBtn i").classList.toggle("fa-xmark");

})

function toggleNavClass(ele){
    ele.classList.toggle('show-links');
}

//close navbar when clicked outside
const mainEle = getElement('#main');
mainEle.addEventListener('click',function(){
    removeNavClass(navItemsContainer);
})

function removeNavClass(ele){
    ele.classList.remove('show-links');
}



//fixed navbar when scrolled
const nav = getElement("#nav");
    window.addEventListener('scroll',function(){
        let scrollVer = this.scrollY;
        if(scrollVer > 50){
            nav.style.backgroundColor = "rgba(255, 255, 255)";
            nav.style.boxShadow = "-1px 7px 16px -4px rgba(163,163,163,1)"
            return;
        }

        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "-1px 7px 16px -4px rgba(163,163,163,0)"

})


//top btn hide and show
const topBtn = getElement("#top-btn");
window.addEventListener('scroll',function(){
    let scrollVer = this.scrollY;
    if(scrollVer > 200){
        topBtn.style.display = "block";
        return;
    } 
    topBtn.style.display = "none";

})





// collapse bar
const collapseItems = getElements('.collapse-item');
collapseItems.forEach(function(collapseItem){
    collapseItem.addEventListener('click',function(){

    
        if(this.classList.contains('collapse-active')){
            const collapseDesc = getElement('.collapse-active .collapse-desc');
            collapseDesc.style.height = "0px";
            this.classList.remove('collapse-active');
            return;
        }

        removeClass(collapseItems,'collapse-active')


        this.classList.add('collapse-active');
        const collapseDesc = getElement('.collapse-active .collapse-desc');
        collapseDesc.style.height = collapseDesc.scrollHeight +"px";
    })
})



function removeClass(elements,className){
    if(!getElement(`.${className} .collapse-desc`)){
        return;
    }
    const collapseDesc = getElement(`.${className} .collapse-desc`);
    collapseDesc.style.height = "0px";
    elements.forEach((element)=>{
        element.classList.remove(className);
    })
}