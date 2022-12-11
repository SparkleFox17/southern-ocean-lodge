let navBtns = document.querySelectorAll(".nav-btn a");
let subNav = document.getElementById("sub-nav-menu");

subNav.addEventListener("mouseout", hideSubNav);

for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("mouseover", showSubNav);
}

function hideSubNav() {
    let subNav = document.getElementById('sub-nav-menu');
    let subNavBtns = document.querySelectorAll(".sub-nav-li");

    for (let i = 0; i < subNavBtns.length; i++) {
        subNavBtns[i].classList.remove("active");
    }

    console.log('im out')
    subNav.classList.remove("active");
}

function showSubNav(e) {
    let menuNum = e.target.getAttribute("data-id");

    if(menuNum != null) {
        let subNav = document.getElementById('sub-nav-menu');
        let subNavBtn = document.querySelector(".sub-nav-li[data-id='"+ menuNum + "']");
        let subNavBtns = document.querySelectorAll(".sub-nav-li");
    
        for (let i = 0; i < subNavBtns.length; i++) {
            subNavBtns[i].classList.remove("active");
        }
    
        if(menuNum != 0) {
            subNav.classList.add("active");
            subNavBtn.classList.add("active");
        }
    }

}