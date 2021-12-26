import '../styles/style.css'

//Dom variables
const parallax = document.querySelector('.parallax');
const parallaxX = document.querySelector('.parallax-both');
const parallaxXSection = document.querySelector('.parallax-both-section');
const slides = document.querySelectorAll('.slide');
const reviewSlides = document.querySelectorAll('.review');
const dotContainer = document.querySelector('.dot-container');
const floatingButton = document.getElementById('myfloat');

//script variables
var lastScrollTop = 0;
let currentSlide = 0;
var isScrolling;

var animation = bodymovin.loadAnimation({
	container: document.getElementById('float'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'https://assets2.lottiefiles.com/packages/lf20_vjOdvH.json'
});
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
};
//create dots
const createDots = () => {
	reviewSlides.forEach(function (_, i) {
		dotContainer.insertAdjacentHTML(
			'beforeend',
			`<button class="dot" data-review="${i}"></button>`
		);
	});
};
//adding listeners to dots
const makeDotsInteractive = () => {
	document.querySelector(`.dot[data-review = "${currentSlide}"]`).classList.add('active-dot');
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			goTo(i);
		})
	});
};
//slider function
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
//start listeners
const startListeners = () => {
	//scroll-button home
	document.querySelector('.scroll-down').addEventListener('click', () => {
		window.scroll({
			top: window.innerHeight - 80,
			left: 0,
			behavior: 'smooth'
		});
	});

	// evenlisteners for smooth scrolling
	document.querySelector('.home-btn').addEventListener('click', (e) => {
		document.getElementById('check').checked = false;
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
	document.querySelector('.about-btn').addEventListener('click', (e) => {
		document.getElementById('check').checked = false;
		window.scroll({
			top: window.innerHeight - 80,
			left: 0,
			behavior: 'smooth'
		});
	});
	document.querySelector('.actors-btn').addEventListener('click', (e) => {
		document.getElementById('check').checked = false;
		window.scroll({
			top: 2 * window.innerHeight - 160,
			left: 0,
			behavior: 'smooth'
		});
	});
	document.querySelector('.videos-btn').addEventListener('click', (e) => {
		document.getElementById('check').checked = false;
		window.scroll({
			top: 3 * window.innerHeight - 160,
			left: 0,
			behavior: 'smooth'
		});
	});
	document.querySelector('.blogs-btn').addEventListener('click', (e) => {
		document.getElementById('check').checked = false;
		window.scroll({
			top: 4 * window.innerHeight - 160,
			left: 0,
			behavior: 'smooth'
		});
	});
	document.querySelector('.reviews-btn').addEventListener('click', (e) => {
		document.getElementById('check').checked = false;
		window.scroll({
			top: document.body.scrollHeight,
			left: 0,
			behavior: 'smooth'
		});
	});
};
//windows scroll effects
const startWindowsScroll = () => {
	//animations on window scroll
	window.addEventListener('scroll', () => {
		window.clearTimeout(isScrolling);
		let offset = window.pageYOffset;
		// parallax.style.backgroundPositionY = offset * 0.7 + 'px';
		// parallaxXSection.style.backgroundPositionX = offset * 0.9 + 'px';

		// parallaxX.style.backgroundPositionY = offset * 1.3 + 'px';

		isScrolling = setTimeout(function () {
			animation.pause();
			// Run the callback
			// floatingButton.classList.remove('rotateBackgroundClockWise');
			// floatingButton.classList.remove('rotateBackgroundAntiClockWise');

		}, 66);
		var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
		if (st > lastScrollTop) {
			// downscroll code
			if (parallaxX.scrollLeft != parallaxX.scrollWidth) {
				parallaxX.scrollTo(parallaxX.scrollLeft + 5, 0);
			}
			animation.setDirection(1);
			animation.play();
			// floatingButton.classList.add('rotateBackgroundClockWise');
		} else {
			// upscroll code
			if (parallaxX.scrollLeft != parallaxX.scrollWidth) {
				parallaxX.scrollTo(parallaxX.scrollLeft - 5, 0);
			}
			animation.setDirection(-1);
			animation.play();
			// floatingButton.classList.add('rotateBackgroundAntiClockWise');
		}
		lastScrollTop = st <= 0 ? 0 : st;
	})
};

//starting everything
const start = () => {
	translateSlides();
	createDots();
	makeDotsInteractive();
	startListeners();
	startWindowsScroll();
}

start();

