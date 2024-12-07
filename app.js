/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 *
 */
let nav_sections = document.querySelector(".navbar__menu #navbar__list");
let list_of_sections = document.querySelectorAll("main section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
/* Create the li element with text 'section' */
function create_li(i) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("class", "menu__link");
    a.textContent = "section" + (i + 1);
    a.setAttribute("href", "#section" + (i + 1));
    a.addEventListener("click", (ev) => {
        ev.preventDefault();
        list_of_sections[i].scrollIntoView({ behavior: "smooth" , block : 'start' });
    });
    li.appendChild(a);
    return li;
}

/**
 * End Helper Functions
 *
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 0; i < list_of_sections.length; i++) {
    const l = create_li(i);
    nav_sections.append(l);
}
// Add class 'active' to section when near top of viewport
let links = document.querySelectorAll(".navbar__menu ul li a");
window.addEventListener("scroll", () => {
    list_of_sections.forEach((sec, index) => {
        let p = sec.getBoundingClientRect();
        if (p.top < 200 && p.bottom >= 300) {
            links[index].classList.add("active");
            sec.classList.add("your-active-class");
        } else {
            links[index].classList.remove("active");
            sec.classList.remove("your-active-class");
        }
    });
});

// Scroll to anchor ID using scrollTO event

// Scroll to section on link click\

// Set sections as active
