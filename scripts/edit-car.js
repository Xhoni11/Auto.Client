const form = document.getElementById('car-form');
const id = Number(new URLSearchParams(window.location.search).get('id'));

async function load() {
    const c = await storeHttp.getById(id);
    if (!c) {
        alert('Makina nuk u gjet.');
        window.location.href = 'inventory.html';
        return;
    }
    document.getElementById('marka').value = c.marka;
    document.getElementById('modeli').value = c.modeli;
    document.getElementById('viti').value = c.viti;
    document.getElementById('cmimi').value = c.cmimi;
    document.getElementById('ngjyra').value = c.ngjyra;
    document.getElementById('kilometra').value = c.kilometra;
    document.getElementById('karburanti').value = c.karburanti;
    document.getElementById('transmisioni').value = c.transmisioni;
    document.getElementById('neShitje').checked = c.neShitje;
    document.getElementById('imazhUrl').value = c.imazhUrl;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await storeHttp.update(id, {
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

load();
