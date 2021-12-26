const splash = document.querySelector('.splash');

//splash screen
if (sessionStorage.isVisited) {
	splash.classList.add('display-none');
}
if (!sessionStorage.isVisited) {
	setTimeout(() => {
		sessionStorage.isVisited = 'true'
	}, 3700);
	document.addEventListener('DOMContentLoaded', (e) => {
		setTimeout(() => {
			splash.classList.add('display-none');
		}, 3000);
	});
}