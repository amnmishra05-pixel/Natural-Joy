
// HIDE & SHOW NAVIGATION BAR FUNCTION
const menuIcon = document.querySelector('#humburgerMenu');
const hiddenNav = document.querySelector('#hiddenNav');
const closeBtn = document.querySelector('#closerBtn');

if (menuIcon && hiddenNav && closeBtn) {
    menuIcon.addEventListener('click', function (e) {
        e.preventDefault();
        hiddenNav.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        hiddenNav.style.display = 'none';
    });
}



// SCROLLING THE RELATED PROUDCT ONE BY ONE
const slider = document.querySelector('#productSlider');
const slideLeft = document.querySelector('#slideLeft');
const slideRight = document.querySelector('#slideRight');

if (slider && slideLeft && slideRight) {
    const scrollAmount = 280 + 18;

    slideLeft.addEventListener('click', function () {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

        // Update chevron color
        slideLeft.classList.add('active');
        slideRight.classList.remove('active');
    });

    slideRight.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

        slideLeft.classList.remove('active');
        slideRight.classList.add('active');
    });
}




// FILTER FLAVOURS LIST OPEN & CLOS THROUG CHEVRON
document.querySelectorAll('.fruit-flavors').forEach(flavor => {
    const title = flavor.querySelector('.flavor-title');
    const variant = flavor.querySelector('.fruit-variant');
    const chevronUp = flavor.querySelector('.fa-chevron-up');
    const chevronDown = flavor.querySelector('.fa-chevron-down');

    // Initial state: closed
    variant.style.display = 'none';
    chevronUp.style.display = 'none';

    title.addEventListener('click', () => {
        const isOpen = variant.style.display === 'block';

        // Toggle dropdown
        variant.style.display = isOpen ? 'none' : 'block';

        // Toggle icons
        chevronUp.style.display = isOpen ? 'none' : 'inline';
        chevronDown.style.display = isOpen ? 'inline' : 'none';
    });
});




// BESTSELLER FILTERING PRODUCT ACCORDING TO FILTER BUTTON
const flavorBtn = document.querySelectorAll('.fruit-filter');
const products = document.querySelectorAll('.pro');
const message = document.getElementById('no-products');

flavorBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        const selectFruit = button.value;
        let productFound = false; // to check if at least one product is shown

        // Remove "active" class from all buttons
        flavorBtn.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add "active" class to the clicked button
        button.classList.add('active');

        products.forEach(function (product) {
            if (selectFruit === "all" || product.getAttribute("data-flavor") === selectFruit) { // "||" it's denote OR*/ 
                product.style.display = "block";
                productFound = true; // If we found at least one product
            } else {
                product.style.display = "none";
            }
        });

        if (productFound) {
            message.style.display = "none";
        } else {
            message.style.display = "block";
        }

    });
});



