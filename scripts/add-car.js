const form = document.getElementById('car-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await storeHttp.add({
        marka: document.getElementById('marka').value.trim(),
        modeli: document.getElementById('modeli').value.trim(),
        viti: parseInt(document.getElementById('viti').value),
        cmimi: parseFloat(document.getElementById('cmimi').value),
        ngjyra: document.getElementById('ngjyra').value.trim(),
        kilometra: parseInt(document.getElementById('kilometra').value),
        karburanti: document.getElementById('karburanti').value,
        transmisioni: document.getElementById('transmisioni').value,
        neShitje: document.getElementById('neShitje').checked,
        imazhUrl: document.getElementById('imazhUrl').value.trim()
    });
    window.location.href = 'inventory.html';
});
