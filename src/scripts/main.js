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
//nav background change
const triggerNavBackground = () => {
	if (window.pageYOffset >= 100) {
		document.querySelector('nav').style.background = 'var(--primary-dark-color)';
	}
	else {
		document.querySelector('nav').style.background = 'transparent';
	}
}
//windows scroll effects
const startWindowsScroll = () => {
	//animations on window scroll
	window.addEventListener('scroll', () => {

		triggerNavBackground();
		window.clearTimeout(isScrolling);
		isScrolling = setTimeout(function () {
			animation.pause();
		}, 66);
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop) {
			if (parallaxX.scrollLeft != parallaxX.scrollWidth) {
				parallaxX.scrollTo(parallaxX.scrollLeft + 5, 0);
			}
			animation.setDirection(1);
			animation.play();
		} else {
			// upscroll code
			if (parallaxX.scrollLeft != parallaxX.scrollWidth) {
				parallaxX.scrollTo(parallaxX.scrollLeft - 5, 0);
			}
			animation.setDirection(-1);
			animation.play();
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

