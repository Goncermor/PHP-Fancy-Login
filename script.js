const Sleep = m => new Promise(r => setTimeout(r, m));

function loaded() {
    preLoadImage();
    backgroundLoop();   
}

function preLoadImage() {
    for (let i = 0; i < 4; i++) {
        let img = new Image();
        img.src = "img/" + i + ".webp";
    }
}

async function backgroundLoop() {
    while (true) {
        for (let i = 1; i < 4; i++) {
            await Sleep(6000);
            console.log(i);
            document.body.style.backgroundImage = 'url("img/' + i + '.webp")';
        }
    }
}