document.addEventListener("DOMContentLoaded", function () {
   
	/* ======   оторазить форму поиска по клику на лупу в шапке      ====== */
	const headerSearchOpen = document.querySelector('#search-open');
	const headerSearchForm = document.querySelector('#header-search-form');

	headerSearchOpen.addEventListener('click', ()=>{
		
		headerSearchForm.classList.toggle('search-form--open');
		console.log(headerSearchForm.classList);
	});

	/* ======  menu icon click ====== */
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#header-menu');
	const bodyEl = document.body;

	if (menuToggle) {

		/*   клик поиконке гамбургер*/  
		menuToggle.addEventListener('click', ()=> {
			
			if (menuToggle.classList.contains('active')) {

				menuToggle.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			
			} else {
				menuToggle.classList.add('active');
			    mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});

       /*   клик по мобильному меню*/  
		mobileMenu.addEventListener('click', () => {
			menuToggle.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		});
	}
	/*HEADER SLIDER */
	var headerSwiper = new Swiper(".header-slider", {
		loop: true,
		speed: 1000,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	/*CTASLIDER */
	var headerSwiper = new Swiper(".cta-slider", {
		loop: true,
		speed: 1000,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
})