const eleSliderViewer = document.querySelector('.slider-viewer');
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

// aggiungere gli event listeners ai due bottoni
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
		setInterval(goAhead, 3000);
		}
	}
)

//pulsante reverse
/*reverseBtn.addEventListener('click', function (){
	if (reverseBtn.dataset.state == 'forward') {
		reverseBtn.dataset.state = 'reverse'
		clearInterval(autoplay);
		reverseBtn.innerHTML = 'Reverse';
	} else if (reverseBtn.dataset.state == 'reverse') {
		reverseBtn.dataset.state = 'forward'
		reverseBtn.innerHTML = 'Forward';
		goAhead();
		}
	}
)*/
