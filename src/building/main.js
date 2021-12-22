import './style.css'

let theme = false;

let progress = document.getElementById('horizontalProgressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.width = progressHeight + '%';
})

document.getElementById('float-like').addEventListener('click', () => {
	document.querySelector('.like').classList.toggle('hidden');
	document.querySelector('.liked').classList.toggle('hidden');
})


//themes
const changeTheme = () => {
	if (theme === true) {
		document.body.style.color = 'black';
		document.body.style.background = 'var(--primary-light-color)';
		document.getElementById('documentation').style.background = 'var(--secondary-light-color)';
		document.getElementById('documentation').style.boxShadow = 'inset 4px 4px 7px var(--light-neumorphism-shadow-1), inset -7px -7px 7px var(--light-neumorphism-shadow-2)';
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
		document.getElementById('float-mode').style.boxShadow = 'inset 7px 7px 7px var(--dark-neumorphism-shadow-1), inset -7px -7px 7px var(--dark-neumorphism-shadow-2)';
		document.getElementById('float-mode').style.justifyContent = 'flex-end';
		document.getElementById('mode-circle').style.background = 'var(--light-button-background)';
	} else if (theme === false) {
		document.body.style.color = 'white';
		document.body.style.background = 'var(--primary-dark-color)';
		document.getElementById('documentation').style.background = 'var(--secondary-dark-color)';
		document.getElementById('documentation').style.boxShadow = 'inset 4px 4px 7px var(--dark-neumorphism-shadow-1), inset -7px -7px 7px var(--dark-neumorphism-shadow-2)';
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
	}
}
document.getElementById('mode-circle').addEventListener('click', () => {
	theme = !theme;
	changeTheme();
})