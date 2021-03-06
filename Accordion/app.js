const accordions = document.querySelectorAll('.accordion');
const accordionIcons = document.querySelectorAll('.accordion__icon');

// accordion(root accordion__icon parent) -> accordion__title -> accordion__icon

accordionIcons.forEach((accordionIcon) => {
    accordionIcon.addEventListener('click', (icon) => {
        let currentIconRootParent = icon.currentTarget.parentElement.parentElement;
        accordions.forEach((accordion) => {
            if (accordion !== currentIconRootParent)
                accordion.classList.remove('show-text');
        });
        currentIconRootParent.classList.toggle('show-text');
    });
});