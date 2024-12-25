const header = document.querySelector('header');
const img = document.querySelector('.img');
let scrollDistance = 0;
let requestId = null;

function updateHeaderClipPath() {
    const clipPathValue = `polygon(0 0, 100% 0%, 100% ${(scrollDistance <= 600) ? 100 - ((scrollDistance / 600) * 60) : 75}%, 0 100%)`;
    header.style.clipPath = clipPathValue;
    const scaleValue = 1 + ((scrollDistance / 600) * 1);
    img.style.transform = `scale(${scaleValue})`;
    const opacityValue = (scrollDistance / 600);
}

function scrollHandler(event) {
    if (event.deltaY < 0) {
        scrollDistance = Math.max(0, scrollDistance + event.deltaY);
    } else {
        scrollDistance = Math.min(600, scrollDistance + event.deltaY);
    }
    if (!requestId) {
        requestId = window.requestAnimationFrame(() => {
            updateHeaderClipPath();
            requestId = null;
        });
    }
}

window.addEventListener('wheel', scrollHandler);