    function scrollToElement(elementSelector , instance = 0){
        const elements = document.querySelectorAll(elementSelector);
        if(elements.length > instance){
            elements[instance].scrollIntoView({behavior : 'smooth'});
        }
    };


const pepe = document.getElementById("pepe");
pepe.addEventListener('click' , () =>{
    scrollToElement('.contact')
});
const projectbtn = document.getElementById("projectbtn");
projectbtn.addEventListener('click', () =>{
    scrollToElement('.projects')
})
