import './style.css'
const parallax = document.querySelector('.parallax');
const parallaxX = document.querySelector('.parallax-both');
const parallaxXSection = document.querySelector('.parallax-both-section');
const slides = document.querySelectorAll('.slide');
const reviewSlides = document.querySelectorAll('.review');
const dotContainer = document.querySelector('.dot-container');
const floatingButton = document.getElementById('myfloat');
var lastScrollTop = 0;
let currentSlide = 0;
var isScrolling;

//animations on window scroll
window.addEventListener('scroll', () => {
	window.clearTimeout(isScrolling);
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + 'px';
	parallaxXSection.style.backgroundPositionX = offset * 0.6 + 'px';

	// parallaxX.style.backgroundPositionY = offset * 1.3 + 'px';

	isScrolling = setTimeout(function () {

		// Run the callback
		floatingButton.classList.remove('rotateBackgroundClockWise');
		floatingButton.classList.remove('rotateBackgroundAntiClockWise');

	}, 66);
	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	if (st > lastScrollTop) {
		// downscroll code
		if (parallaxX.scrollLeft != parallaxX.scrollWidth) {
			parallaxX.scrollTo(parallaxX.scrollLeft + 5, 0);
		}
		floatingButton.classList.add('rotateBackgroundClockWise');
	} else {
		// upscroll code
		if (parallaxX.scrollLeft != parallaxX.scrollWidth) {
			parallaxX.scrollTo(parallaxX.scrollLeft - 5, 0);
		}
		floatingButton.classList.add('rotateBackgroundAntiClockWise');
	}
	lastScrollTop = st <= 0 ? 0 : st;
})

//evenlisteners for smooth scrolling
// document.querySelector('.home-btn').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.getElementById('home').scrollIntoView({
// 		behavior: 'smooth'
// 	})
// });
// document.querySelector('.about-btn').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.getElementById('about').scrollIntoView({
// 		behavior: 'smooth'
// 	})
// });
// document.querySelector('.actors-btn').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.getElementById('actors').scrollIntoView({
// 		behavior: 'smooth'
// 	})
// });
// document.querySelector('.videos-btn').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.getElementById('gallery').scrollIntoView({
// 		behavior: 'smooth'
// 	})
// });
// document.querySelector('.blogs-btn').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.getElementById('blogs').scrollIntoView({
// 		behavior: 'smooth'
// 	})
// });
// document.querySelector('.reviews-btn').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.getElementById('reviews').scrollIntoView({
// 		behavior: 'smooth'
// 	})
// });
//translating slides on scale of 100% * i
const translateSlides = () => {
	slides.forEach(
		(s, i) => {
			s.style.transform = `translateX(${100 * i}%)`;
		}
	);
	reviewSlides.forEach(
		(s, i) => {
			s.style.transform = `translateX(${100 * i}%)`;
		}
	);
}
const createDots = () => {
	reviewSlides.forEach(function (_, i) {
		dotContainer.insertAdjacentHTML(
			'beforeend',
			`<button class="dot" data-review="${i}"></button>`
		);
	});
};
const goTo = function (slide) {
	currentSlide = slide;
	reviewSlides.forEach(
		(s, i) => {
			s.style.transform = `translateX(${100 * (i - slide)}%)`;
		}
	);


	setTimeout(() => {
		document
			.querySelectorAll('.dot')
			.forEach(dot => dot.classList.remove('active-dot'));

		document
			.querySelector(`.dot[data-review="${currentSlide}"]`)
			.classList.add('active-dot');

	}, 200);

};
//starting everything
const start = () => {
	translateSlides();
	createDots();
	document.querySelector(`.dot[data-review = "${currentSlide}"]`).classList.add('active-dot');
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			goTo(i);
		})
	});
}
start();

