import './style.css'

let progress = document.getElementById('horizontalProgressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.width = progressHeight + '%';
})

document.getElementById('float').addEventListener('click', () => {
	document.querySelector('.like').classList.toggle('hidden');
	document.querySelector('.liked').classList.toggle('hidden');
})
document.getElementById('float-mode').addEventListener('click', () => {
	document.querySelector('.light').classList.toggle('hidden');
	document.querySelector('.dark').classList.toggle('hidden');
})