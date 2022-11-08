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
	eleImg.src =`img/${images[0].image}`;
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSliderViewer.append(eleImg);

	//creazione Titolo
	const eleSliderTitle = document.createElement('h3'); 
	eleSliderTitle.classList.add('slider-h3');
	eleSliderTitle.innerHTML = `${images[0].title}`;
	if (i === 0) eleSliderTitle.classList.add('active');
	eleSliderText.append(eleSliderTitle);

	//Creazione Paragrafo
	const eleSliderParagraph = document.createElement('p'); 
	eleSliderParagraph.classList.add('slider-p');
	eleSliderParagraph.innerHTML = `${images[0].text}`;
	if (i === 0) eleSliderParagraph.classList.add('active');
	eleSliderText.append(eleSliderParagraph);

	// eleSliderText.classList.add('.slider-text');
	// const eleSliderTitle = document.createElement('h3'); //creazione titolo
	// eleSliderText.innerHTML = `
	// 		<h3>${images[i].title}</h3>
	// 		<p>${images[i].text}</p>`;
	// if (i === 0) {
	// 	eleSliderText.classList.add('active');
	// }
	// eleSliderViewer.append(eleSliderText);

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
const listTitle = document.querySelectorAll('.slider-title');
const listParagraph = document.querySelectorAll('.slider-paragraph');


let activeIndex = 0;
document.body.style.backgroundImage = `url('${images[activeIndex].image}')`; //background url da cambiare al click
document.body.style.backgroundSize = 'cover';

// aggiungere gli event listeners ai due bottoni
eleBtnDown.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');



	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	
	document.body.style.backgroundImage = `url('${images[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
});

eleBtnUp.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');


	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	
	document.body.style.backgroundImage = `url('${images[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
});