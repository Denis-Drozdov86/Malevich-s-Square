
const rectBig = document.querySelector('.rectBig');
const messageOut = document.querySelector('.messageOut');
const imageSymbol = document.createElement('div');
imageSymbol.classList.add('photo1');
imageSymbol.innerHTML = '<img src="images/fuck.png" alt="images">';
rectBig.append(imageSymbol);
const imgesBoom = document.createElement('div');
imgesBoom.classList.add('photo2');
imgesBoom.innerHTML = '<img src="images/boom.png" alt="boom">';
rectBig.append(imgesBoom);
imgesBoom.style.display = 'none';
const game = {
	timer: 0,
	start: null
}
messageOut.textContent = 'Kill him!';

imageSymbol.addEventListener('click', () => {
	imageSymbol.style.display = 'none';
	imgesBoom.style.display = 'block';
	game.timer = setTimeout(loadData, saveData(3000));
	if (!game.start) {
		messageOut.textContent = 'The first download!';
	} else {
		const gameTime = new Date().getTime();
		const res = (gameTime - game.start) / 1000;
		messageOut.style.color = 'red';
		messageOut.textContent = `You chewed snot ${res} seconds!`;
	}
})

function loadData() {
	game.start = new Date().getTime();
	imageSymbol.style.display = 'block';
	imgesBoom.style.display = 'none';
	messageOut.style.color = 'black';
	messageOut.textContent = 'Kill him!';
	imageSymbol.style.left = saveData(390) + 'px';
	imageSymbol.style.top = saveData(390) + 'px';
	imgesBoom.style.left = imageSymbol.style.left;
	imgesBoom.style.top = imageSymbol.style.top;
}

function saveData(val) {
	return Math.floor(Math.random() * val);
}
