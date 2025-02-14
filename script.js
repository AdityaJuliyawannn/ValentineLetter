let isFirstClick = true;

function openEnvelope(event) {
    if (!isFirstClick) return;
    event.stopPropagation();
    let envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
    createHearts();
    isFirstClick = false;
}

function showSecondLetter(event) {
    event.stopPropagation();
    if (isFirstClick) return;
    
    let firstLetter = document.querySelector('.letter.first');
    let secondLetter = document.querySelector('.letter.second');
    
    firstLetter.classList.add('move-aside');
    setTimeout(() => {
        secondLetter.classList.add('show');
        createHearts();
    }, 300);
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    heartsContainer.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️💐🎉';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 200);
    }
}
