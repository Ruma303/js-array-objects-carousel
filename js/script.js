/*const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleSliderText = document.querySelector('.slider-text'); //contenitore dei testi
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');
//array delle immagini
const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

// creare i tag immagine nell'html
for (let i = 0; i < images.length; i++) {
	
	const eleImg = document.createElement('img');
	eleImg.src =`img/${images[i].image}`;
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSliderViewer.append(eleImg);

	//creazione Titolo
	const eleSliderTitle = document.createElement('h3'); 
	eleSliderTitle.classList.add('slider-h3');
	eleSliderTitle.innerHTML = `${images[i].title}`;
	if (i === 0) eleSliderTitle.classList.add('active');
	eleSliderText.append(eleSliderTitle);

	//Creazione Paragrafo
	const eleSliderParagraph = document.createElement('p'); 
	eleSliderParagraph.classList.add('slider-p');
	eleSliderParagraph.innerHTML = `${images[i].text}`;
	if (i === 0) eleSliderParagraph.classList.add('active');
	eleSliderText.append(eleSliderParagraph);

	// creare i tag immagine che vanno nella sezione .thumbs
	const eleThumb = document.createElement('img');
	eleThumb.src = `img/${images[i].image}`;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}



const listEleImg = document.querySelectorAll('.slider-img'); 
const listThumbs = document.querySelectorAll('.thumb-img');
const listTitle = document.querySelectorAll('.slider-h3');
const listP = document.querySelectorAll('.slider-p');


let activeIndex = 0;
document.body.style.backgroundImage = `url('${images[activeIndex].image}')`; //background url da cambiare al click
document.body.style.backgroundSize = 'cover';

// Bottone giù
eleBtnDown.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	listTitle[activeIndex].classList.remove('active');
	listP[activeIndex].classList.remove('active');
	//loop infinito
	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	listTitle[activeIndex].classList.add('active');
	listP[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${images[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
});

// Bottone su
eleBtnUp.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	listTitle[activeIndex].classList.remove('active');
	listP[activeIndex].classList.remove('active');

	//loop infinito
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	listTitle[activeIndex].classList.add('active');
	listP[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${images[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
});


//Bonus 1 Funzione autoplay
const autoplay = setInterval(goAhead, 3000);
function goAhead() {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	listTitle[activeIndex].classList.remove('active');
	listP[activeIndex].classList.remove('active');
	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	listTitle[activeIndex].classList.add('active');
	listP[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${images[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
}

//Bonus 2
const pauseBtn = document.querySelector('#pause');
const reverseBtn = document.querySelector('#reverse');

//pulsante play e pause
pauseBtn.addEventListener('click', function (){
	if (pauseBtn.dataset.state == 'play') {
		pauseBtn.dataset.state = 'stop'
		clearInterval(autoplay);
		pauseBtn.innerHTML = 'Play';
	} else if (pauseBtn.dataset.state == 'stop') {
		pauseBtn.dataset.state = 'play'
		pauseBtn.innerHTML = 'Pause';
		autoplay = goAhead(); //non so che metterci
		}
	}
)*/

//Funzione andare indietro
/*const reverse = setInterval(reverseFun, 3000);
function reverseFun() {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	listTitle[activeIndex].classList.remove('active');
	listP[activeIndex].classList.remove('active');

	//loop infinito
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	listTitle[activeIndex].classList.add('active');
	listP[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${images[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';}

//pulsante reverse
reverseBtn.addEventListener('click', function (){
	if (reverseBtn.dataset.state == 'forward') {
		reverseBtn.dataset.state = 'reverse'
		clearInterval(reverse);
		reverseBtn.innerHTML = 'Reverse';
	} else if (reverseBtn.dataset.state == 'reverse') {
		reverseBtn.dataset.state = 'forward'
		reverseBtn.innerHTML = 'Forward';
		setInterval(reverse, 3000);
		}
	}
)*/


//Codice con Vue
const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const timeSlider = 1 * 1000;
let direction = 1;
let activeIndex = 0;
let idInterval;
let isAutoplayActive = true;

renderSlider(arrImages);
startAutoplay();


// EVENT LISTENERS

// per disattivare l'autoslider se ci troviamo con il mouse sopra
document.querySelector('.slider').addEventListener('mouseenter', () => stopAutoplay());
// per riattivare l'autoslider quando spostiamo il mouse fuori dallo slider
document.querySelector('.slider').addEventListener('mouseleave', () => {
	if (isAutoplayActive) {
		startAutoplay();
	}
});

document.querySelector('.btn-invert').addEventListener('click', () => invertDirection());

document.querySelector('.btn-start-stop').addEventListener('click', function() {
	if (isAutoplayActive) {
		stopAutoplay();
		isAutoplayActive = false;
		this.innerHTML = 'Start';
	} else {
		startAutoplay();
		isAutoplayActive = true;
		this.innerHTML = 'Stop';
	}
});

const listSlides = document.querySelectorAll('.slide');

const listThumbs = document.querySelectorAll('.thumb-img');
listThumbs.forEach((eleThumb, index) => {
	eleThumb.addEventListener('click', () => {
		listSlides[activeIndex].classList.remove('active');
		listThumbs[activeIndex].classList.remove('active');
		activeIndex = index;
		listSlides[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
		document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	})
});

// aggiungere gli event listeners ai due bottoni
const eleBtnDown = document.querySelector('.btn-down');
eleBtnDown.addEventListener('click', () => moveSlide(1));

const eleBtnUp = document.querySelector('.btn-up');
eleBtnUp.addEventListener('click', () => moveSlide(-1));

// FUNCTIONS

function renderSlider(arrImages) {
	const eleSliderViewer = document.querySelector('.slider-viewer');
	const eleSliderThumbs = document.querySelector('.thumbs');

	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	// creare i tag immagine nell'html
	for (let i = 0; i < arrImages.length; i++) {
		const objSlide = arrImages[i];
		// creare le slide
		eleSliderThumbs.innerHTML = eleSliderThumbs.innerHTML + `<img src="img/${objSlide.image}" class="thumb-img ${i === 0 ? 'active' : ''}">`;
		eleSliderViewer.innerHTML += `
			<div class="slide ${i === 0 ? 'active' : ''}">
				<img src="img/${objSlide.image}" alt="${objSlide.title}">
				<div class="text">
					<h2>${objSlide.title}</h2>
					<p>${objSlide.text}</p>
				</div>
			</div>
		`
	}
}

function startAutoplay() {
	idInterval = setInterval(() => moveSlide(direction), timeSlider);
}

function stopAutoplay() {
	clearInterval(idInterval);
}

function invertDirection() {
	direction *= -1; // 1  * -1 = -1; -1 * -1 = 1
}

function moveSlide(direction) {
	// togliere la classe active dall'elemento attivo corrente
	listSlides[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	if (direction > 0) {
		activeIndex++;
		if (activeIndex === listSlides.length) {
			activeIndex = 0;
		}
	} else {
		if (activeIndex === 0) {
			activeIndex = listSlides.length;
		}
		activeIndex--;
	}

	// aggiungere la classe active all'elemento successivo
	listSlides[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
}
