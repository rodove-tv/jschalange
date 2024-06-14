window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;

document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.createElement("button");
    generateBtn.textContent = "Générer";

    const sortBtn = document.createElement("button");
    sortBtn.textContent = "Trier";

    const bubbleArea = document.createElement("div");
    bubbleArea.id = "bubbleArea";

    const gameDiv = document.getElementById("game");
    gameDiv.appendChild(generateBtn);
    gameDiv.appendChild(sortBtn);
    gameDiv.appendChild(bubbleArea);

    const TOTAL_BUBBLES = 20;
    const DELAY = 50;

    generateBtn.addEventListener("click", generateBubbles);
    sortBtn.addEventListener("click", startSort);

    function generateBubbles() {
        bubbleArea.innerHTML = "";
        const minSize = 5;
        const maxSize = 100;
        let index = 0;

        sortBtn.disabled = true;

        function appendBubbleWithDelay() {
            if (index < TOTAL_BUBBLES) {
                const randomWidth = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
                const baseColor = getRandomColor();
                const bubble = document.createElement("div");
                bubble.classList.add("bubble");
                bubble.style.width = `${randomWidth}%`;
                bubble.style.backgroundColor = getColor(randomWidth, baseColor);
                bubbleArea.append(bubble);
                setTimeout(() => bubble.style.opacity = "100%", 50);
                index++;
                setTimeout(appendBubbleWithDelay, DELAY);

                if (index === TOTAL_BUBBLES) {
                    sortBtn.disabled = false;
                }
            }
        }
        appendBubbleWithDelay();
    }

    function getColor(width, baseColor) {
        let hue = 240 - (width / 100 * 120);
        return `hsl(${hue}, 100%, 50%)`;
    }

    function getRandomColor() {
        const seed = Math.floor(Math.random() * 1000000);
        const hue = (seed * 137.5) % 360;
        const saturation = Math.floor(Math.random() * 101);
        const lightness = Math.floor(Math.random() * 51) + 25;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    function startSort() {
        generateBtn.disabled = true;
        sortBtn.disabled = true;
        let bubbles = Array.from(bubbleArea.querySelectorAll(".bubble"));
        bubbleSort(bubbles);
    }

    async function bubbleSort(bubbles) {
        let length = bubbles.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                let k = j + 1;
                let value1 = parseInt(bubbles[j].style.width);
                let value2 = parseInt(bubbles[k].style.width);

                bubbles[j].classList.add('active');
                bubbles[k].classList.add('active');

                if (value1 > value2) {
                    [bubbles[j], bubbles[k]] = [bubbles[k], bubbles[j]];
                    await swapWithDelay(bubbles[k], bubbles[j]);
                }
                bubbles[j].classList.remove("active");
                bubbles[k].classList.remove("active");
            }
        }
        generateBtn.disabled = false;
    }

    function swapWithDelay(bubble1, bubble2) {
        return new Promise(resolve => {
            setTimeout(() => {
                bubbleArea.insertBefore(bubble2, bubble1);
                resolve();
            }, DELAY);
        });
    }
});