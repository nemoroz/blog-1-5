window.addEventListener(
    'load',
    () => {
        if (window.navigator.userAgent.match(/Android|BlackBerry|iPhone|Opera Mini|IEMobile/i)) {
            new Swiper('.swiper-container', {
                navigation: {
                    prevEl: '.prev',
                    nextEl: '.next',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                spaceBetween: 16,
                slidesPerView: 'auto',
            });
        } else {
            let desktop = window.outerWidth >= 1120;
            let visibleCardsCount = desktop ? 8 : 6;
            let cards = document.querySelectorAll('.brand-card');

            let unvisibleCards = [];

            cards.forEach((el, index) => {
                if (index + 1 > visibleCardsCount) {
                    el.classList.add('brand-card--hidden');
                    unvisibleCards.push(el);
                }
            });

            let showAll = document.querySelector('.show-all'),
                showAll__text = document.querySelector('.show-all__text'),
                defaultText = showAll__text.textContent,
                activeText = 'Скрыть',
                showAll__icon = document.querySelector('.show-all__icon'),
                activeIconClass = 'show-all__icon--rotate';

            showAll.addEventListener(
                'click',
                () => {
                    showAll__text.textContent = showAll__text.textContent === defaultText ? activeText : defaultText;

                    showAll__icon.classList.toggle(activeIconClass);

                    unvisibleCards.forEach(el => {
                        el.classList.toggle('brand-card--hidden');
                    });
                },
                false,
            );
        }
    },
    false,
);