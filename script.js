const Sleep = m => new Promise(r => setTimeout(r, m));

async function loaded() {
    await Sleep(2000);
    document.body.style.backgroundImage = 'url("img/2.webp")';
}