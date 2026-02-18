const inviteButton = document.getElementById('invite-button');
const overlay      = document.getElementById('overlay');
const content      = document.getElementById('content');
const audio        = document.getElementById('audio');

// Сразу скрываем контент
content.style.display = "none";

// Показываем оверлей (это можно делать сразу)
overlay.style.display = "flex";

// Самое важное — добавляем обработчик один раз
inviteButton.addEventListener('click', () => {
    // 1. Показываем основной контент
    content.style.display = "block";

    // 2. Показываем оверлей (если нужно оставить видимым — оставляем)
    overlay.style.display = "none";   ← если не нужно — закомментируйте или уберите

    // 3. Устанавливаем громкость
    audio.volume = 0.45;

    // 4. Самое главное — вызываем play() СРАЗУ в этом обработчике
    const playPromise = audio.play();

    // Обрабатываем возможные ошибки (очень рекомендуется)
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Воспроизведение началось успешно");
            })
            .catch(err => {
                console.warn("Не удалось запустить звук:", err.message);
                // Можно показать пользователю подсказку, например:
                // "Нажмите ещё раз, чтобы включить звук" или просто игнорировать
            });
    }
}, { once: false });   // можно поставить { once: true }, если нажатие только одно