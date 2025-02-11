document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, offset = 1.25) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("show");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("show");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    
    handleScrollAnimation();
});
