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
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // --- 1. Генерация точек навигации ---
    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => moveToSlide(i));
            dotsContainer.appendChild(dot);
        }
        updateDots();
    }

    // --- 2. Функция для обновления позиции трека и точек ---
    function updateSlider() {
        // Вычисляем смещение: (индекс * 100%)
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        updateDots();
    }
    
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    // --- 3. Функции переключения ---
    function moveToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentIndex = index;
            updateSlider();
        }
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        moveToSlide(newIndex);
    }

    function prevSlide() {
        // Для кнопки "Назад" нужно корректно обработать переход с 0 на последний слайд
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        moveToSlide(newIndex);
    }

    // --- 4. Назначение обработчиков событий ---
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // --- Инициализация ---
    createDots();
    updateSlider();
    
    // (Опционально) Автопроигрывание, если нужно
    /*
    let autoSlideInterval = setInterval(nextSlide, 5000); 
    // Очистка интервала при наведении на слайдер, чтобы не переключался во время просмотра
    const wrapper = document.querySelector('.slider-wrapper');
    wrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    wrapper.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
    */
});