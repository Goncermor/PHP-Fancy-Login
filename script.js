const Sleep = m => new Promise(r => setTimeout(r, m));

function loaded() {
    backgroundLoop();   
}

async function backgroundLoop() {
    while (true) {
        for (let i = 1; i < 4; i++) {
            await Sleep(3000);
            console.log(i);
            document.body.style.backgroundImage = 'url("img/' + i + '.webp")';
        }
    }
}