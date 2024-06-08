function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior : `smooth`})
    }
}


 const docsid = document.getElementById("docsid");
 
 docsid.addEventListener(`click`, () =>{
    scrollToElement(".contact");
    });
const projectsid = document.getElementById("projectsid");

projectsid.addEventListener("click", () =>{
    scrollToElement(".projects");
});

const featuredid = document.getElementById("featuredid");
featuredid.addEventListener("click", () =>{
    scrollToElement(".footer")
})

const aboutid = document.getElementById("aboutid");
aboutid.addEventListener("click", () =>{
    scrollToElement(".footer")
})

const totop = document.getElementById("totop");
totop.addEventListener('click', () =>{
    scrollToElement(".hero")
})