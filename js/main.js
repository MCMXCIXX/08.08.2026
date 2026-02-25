const inviteButton = document.getElementById('invite-button');
const overlay      = document.getElementById('overlay');
const content      = document.getElementById('content');
const audio        = document.getElementById('audio');
const playerPlayIcon = document.querySelector('.player__play-icon');
const playerPauseIcon = document.querySelector('.player__pause-icon');
const progressbarInner = document.querySelector('.progressbar__inner');
// Сразу скрываем контент
content.style.display = "none";

// Показываем оверлей (это можно делать сразу)
overlay.style.display = "flex";

// Самое важное — добавляем обработчик один раз
inviteButton.addEventListener('click', () => {
    // 1. Показываем основной контент
    content.style.display = "block";

    // 2. Показываем оверлей (если нужно оставить видимым — оставляем)
    overlay.style.display = "none"; 
    // 3. Устанавливаем громкость


}, { once: false });   // можно поставить { once: true }, если нажатие только одно


playerPlayIcon.addEventListener('click', ()=>{
    audio.volume = 0.45;
    playerPauseIcon.style.display = 'flex';
    playerPlayIcon.style.display = 'none';
    audio.play()
})

playerPauseIcon.addEventListener('click', ()=>{
    playerPlayIcon.style.display = 'flex';
    playerPauseIcon.style.display = 'none';
    audio.pause()
})

audio.addEventListener('timeupdate', ()=>{
    progressbarInner.style.width = `${(audio.currentTime / audio.duration) * 100}%`
})


document.addEventListener('DOMContentLoaded', () => {
    class Slider {
        constructor(sliderId) {
            this.slider = document.getElementById(sliderId);
            this.track = this.slider.querySelector('.slider-track');
            this.slides = this.slider.querySelectorAll('.slide');
            this.prevBtn = this.slider.querySelector('.prev');
            this.nextBtn = this.slider.querySelector('.next');
            this.dotsContainer = this.slider.querySelector('.slider-dots');
            
            this.currentIndex = 0;
            this.totalSlides = this.slides.length;
            
            this.init();
        }
        
        init() {
            this.createDots();
            this.updateSlider();
            this.addEventListeners();
        }
        
        createDots() {
            for (let i = 0; i < this.totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.dataset.index = i;
                dot.addEventListener('click', () => this.moveToSlide(i));
                this.dotsContainer.appendChild(dot);
            }
        }
        
        updateSlider() {
            const offset = -this.currentIndex * 100;
            this.track.style.transform = `translateX(${offset}%)`;
            this.updateDots();
        }
        
        updateDots() {
            const dots = this.dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === this.currentIndex) {
                    dot.classList.add('active');
                }
            });
        }
        
        moveToSlide(index) {
            if (index >= 0 && index < this.totalSlides) {
                this.currentIndex = index;
                this.updateSlider();
            }
        }
        
        nextSlide() {
            const newIndex = (this.currentIndex + 1) % this.totalSlides;
            this.moveToSlide(newIndex);
        }
        
        prevSlide() {
            const newIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.moveToSlide(newIndex);
        }
        
        addEventListeners() {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
    }
    
    // Создаем экземпляры слайдеров
    new Slider('slider-woman');
    new Slider('slider-man');
});