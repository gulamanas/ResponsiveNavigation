const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.r-nav');
    burger.addEventListener('click',()=> {
        
        //Toggle Nav
        nav.classList.toggle('nav-active');
    
        //Burger Aninmation
        burger.classList.toggle('toggle');

    });
}

navSlide();