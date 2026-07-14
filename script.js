
const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(()=>{
slides[current].classList.remove('active');
current = (current + 1) % slides.length;
slides[current].classList.add('active');
},4500);

const panel = document.getElementById('panel');
const img = document.getElementById('panel-image');

document.querySelectorAll('.art-card').forEach(card=>{
card.onclick=()=>{
img.src = card.querySelector('img').src;
document.getElementById('work-title').innerText = card.dataset.title;
document.getElementById('work-size').innerText = card.dataset.size || 'N/A';
document.getElementById('work-media').innerText = card.dataset.media;
panel.style.display='grid';
}
})

panel.onclick=(e)=>{
if(e.target===panel){
panel.style.display='none';
}
}


const backButton = document.getElementById('back-button');
if (backButton){
    backButton.onclick = (e)=>{
        e.stopPropagation();
        panel.style.display = 'none';
    }
}


const cards = [...document.querySelectorAll('.art-card')];
let currentIndex = 0;

function openArtwork(index){
    currentIndex = index;

    const card = cards[index];

    img.src = card.querySelector('img').src;
    document.getElementById('work-title').innerText = card.dataset.title;
    document.getElementById('work-size').innerText = card.dataset.size || 'N/A';
    document.getElementById('work-media').innerText = card.dataset.media;

    panel.style.display = 'grid';
}

cards.forEach((card, index) => {
    card.onclick = () => {
        openArtwork(index);
    };
});

document.getElementById('prev-work').onclick = (e) => {
    e.stopPropagation();
    openArtwork((currentIndex - 1 + cards.length) % cards.length);
};

document.getElementById('next-work').onclick = (e) => {
    e.stopPropagation();
    openArtwork((currentIndex + 1) % cards.length);
};

document.addEventListener('keydown', (e) => {

    if (panel.style.display !== 'grid') return;

    if (e.key === 'ArrowLeft') {
        openArtwork((currentIndex - 1 + cards.length) % cards.length);
    }

    if (e.key === 'ArrowRight') {
        openArtwork((currentIndex + 1) % cards.length);
    }

    if (e.key === 'Escape') {
        panel.style.display = 'none';
    }
});
