import './style.css'

document.getElementById('float').addEventListener('click', () => {
	document.querySelector('.like').classList.toggle('hidden');
	document.querySelector('.liked').classList.toggle('hidden');
})