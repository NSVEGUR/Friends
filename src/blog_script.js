import './blog_style.css'


let progress = document.getElementById('horizontalProgressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

var lastScrollTop = 0;
var isScrolling;
var animation = bodymovin.loadAnimation({
	container: document.getElementById('runner'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'https://assets2.lottiefiles.com/packages/lf20_vjOdvH.json'
});

window.addEventListener('scroll', () => {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.width = progressHeight + '%';
	window.clearTimeout(isScrolling);
	isScrolling = setTimeout(function () {
		animation.pause();
	}, 66);
	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	if (st > lastScrollTop) {
		// downscroll code
		animation.setDirection(1);
		animation.play();
	} else {
		animation.setDirection(-1);
		animation.play();
	}
	lastScrollTop = st <= 0 ? 0 : st;
})

document.getElementById('float-like').addEventListener('click', () => {
	document.querySelector('.like').classList.toggle('hidden');
	document.querySelector('.liked').classList.toggle('hidden');
})

const contentsMenu = () => {
	document.getElementById('runner').addEventListener('mouseover', () => {
		document.getElementById('contents-container').classList.remove('hidden');
	});
	document.querySelector('.fa-times').addEventListener('click', () => {
		document.getElementById('contents-container').classList.add('hidden');
	});
}
const contentsScroll = () => {
	const contentBtns = document.querySelectorAll('.content-btn');
	contentBtns.forEach((content, i) => {
		content.addEventListener('click', () => {
			document.querySelector(`.content-${i}`).scrollIntoView({
				behavior: 'smooth'
			})
		})
	})
}
var slidingTagLiAfterStyle = document.createElement("style");
contentsMenu();
contentsScroll();

// themes
let theme = false;
const changeTheme = () => {
	if (theme === true) {
		document.body.style.color = 'black';
		document.body.style.background = 'var(--primary-light-color)';
		document.querySelector('nav').style.background = 'var(--primary-light-color)';
		document.querySelectorAll('a').forEach((el) => {
			el.style.color = 'black';
		});
		document.getElementById('me').style.color = 'var(--secondary-light-text-color)';
		document.querySelectorAll('.social-icons').forEach((el) => {
			el.style.color = 'black';
		});
		document.getElementById('float-like').style.background = 'var(--light-button-background)';
		document.getElementById('float-like').style.boxShadow = 'inset 4px 4px 7px var(--light-neumorphism-shadow-1), inset -7px -7px 7px var(--light-neumorphism-shadow-2)';
		document.getElementById('float-mode').style.background = 'var(--dark-button-background)';
		document.getElementById('float-mode').style.boxShadow = 'inset 4px 4px 7px var(--dark-neumorphism-shadow-1), inset -7px -7px 7px var(--dark-neumorphism-shadow-2)';
		document.getElementById('float-mode').style.justifyContent = 'flex-end';
		document.getElementById('mode-circle').style.background = 'var(--light-button-background)';
		document.getElementById('mode-circle').style.boxShadow = 'inset 7px 7px 7px var(--light-neumorphism-shadow-1), inset -7px -7px 7px var(--light-neumorphism-shadow-2)';
		document.getElementById('horizontalProgressBar').style.background = 'var(--progress-bar-light-color)';
		document.querySelector('.header-overlay').style.background = 'linear-gradient(to top, var(--primary-light-color) 10%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)';
		document.body.style.transition = 'all 0.4s ease-in-out';
		document.getElementById('contents').style.background = 'var(--dark-button-background)';
		document.getElementById('contents').style.color = 'var(--light-button-background)';
		slidingTagLiAfterStyle.innerHTML = `#contents::after{
			position: absolute;
			bottom:-20px;
			right: 10%;
			content: "";
			border: 40px solid transparent;
			border-top-color: var(--dark-button-background);
			border-bottom: 0;
			border-right: 0;
			margin-bottom: -10px;
			transform: rotate(-18deg);
		}`;
		document.head.appendChild(slidingTagLiAfterStyle);
	} else if (theme === false) {
		document.body.style.color = 'white';
		document.body.style.background = 'var(--primary-dark-color)';
		document.querySelector('nav').style.background = 'var(--primary-dark-color)';
		document.querySelectorAll('a').forEach((el) => {
			el.style.color = 'white';
		});
		document.getElementById('me').style.color = 'var(--secondary-dark-text-color)';
		document.querySelectorAll('.social-icons').forEach((el) => {
			el.style.color = 'white';
		});
		document.getElementById('float-like').style.background = 'var(--dark-button-background)';
		document.getElementById('float-like').style.boxShadow = 'inset 4px 4px 7px var(--dark-neumorphism-shadow-1), inset -7px -7px 7px var(--dark-neumorphism-shadow-2)';
		document.getElementById('float-mode').style.background = 'var(--light-button-background)';
		document.getElementById('float-mode').style.boxShadow = 'inset 7px 7px 7px var(--light-neumorphism-shadow-1), inset -7px -7px 7px var(--light-neumorphism-shadow-2)';
		document.getElementById('float-mode').style.justifyContent = 'flex-start';
		document.getElementById('mode-circle').style.background = 'var(--dark-button-background)';
		document.getElementById('mode-circle').style.boxShadow = 'inset 7px 7px 7px var(--dark-neumorphism-shadow-1), inset -7px -7px 7px var(--dark-neumorphism-shadow-2)';
		document.getElementById('horizontalProgressBar').style.background = 'var(--progress-bar-dark-color)';
		document.querySelector('.header-overlay').style.background = 'linear-gradient(to top, black 10%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 100%)';
		document.getElementById('contents').style.background = 'var(--light-button-background)';
		document.getElementById('contents').style.color = 'var(--dark-button-background)';
		slidingTagLiAfterStyle.innerHTML = `#contents::after{
			position: absolute;
			bottom:-20px;
			right: 10%;
			content: "";
			border: 40px solid transparent;
			border-top-color: var(--light-button-background);
			border-bottom: 0;
			border-right: 0;
			margin-bottom: -10px;
			transform: rotate(-18deg);
		}`;
		document.head.appendChild(slidingTagLiAfterStyle);
	}
}
document.getElementById('mode-circle').addEventListener('click', () => {
	theme = !theme;
	changeTheme();
});
document.querySelector('.fa-chevron-down').addEventListener('click', () => {
	document.querySelector('main').scrollIntoView({
		behavior: 'smooth',
	})
});