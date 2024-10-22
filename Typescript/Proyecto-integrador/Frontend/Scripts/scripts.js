document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const button = document.getElementById('enviarCortes');
    const counterDisplay = document.getElementById('clickCounter');

    button.addEventListener('click', function () {
        clickCount++;
        counterDisplay.textContent = clickCount;
    });
});
