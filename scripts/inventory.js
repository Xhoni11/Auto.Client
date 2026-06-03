const grid = document.getElementById('car-grid');

async function render() {
    const cars = await storeHttp.getAll();
    grid.innerHTML = '';

    if (cars.length === 0) {
        grid.innerHTML = `
            <div class="empty" style="grid-column: 1 / -1;">
                <div class="empty-icon">🚗</div>
                <h3>Asnjë makinë në inventor</h3>
                <p>Shto makinën e parë për të filluar.</p>
            </div>`;
        return;
    }

    for (const c of cars) {
        const fallback = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600';
        const img = c.imazhUrl || fallback;
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img class="car-image" src="${img}" alt="${c.marka} ${c.modeli}" onerror="this.src='${fallback}'"/>
            <div class="car-body">
                <div class="car-header">
                    <div>
                        <h3 class="car-title">${c.marka} ${c.modeli}</h3>
                        <div class="car-year">Viti ${c.viti}</div>
                    </div>
                    <span class="badge ${c.neShitje ? 'badge-success' : 'badge-warning'}">
                        ${c.neShitje ? 'Në shitje' : 'E shitur'}
                    </span>
                </div>
                <div class="car-price">${formatPrice(c.cmimi)}</div>
                <div class="car-specs">
                    <div class="spec">
                        <span class="spec-label">Kilometra</span>
                        <span class="spec-value">${formatKm(c.kilometra)}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Karburanti</span>
                        <span class="spec-value">${c.karburanti}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Transmisioni</span>
                        <span class="spec-value">${c.transmisioni}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Ngjyra</span>
                        <span class="spec-value">${c.ngjyra}</span>
                    </div>
                </div>
                <div class="car-actions">
                    <a class="btn btn-outline btn-sm" href="edit-car.html?id=${c.id}">Ndrysho</a>
                    <button class="btn btn-danger btn-sm" data-action="delete" data-id="${c.id}">Fshi</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
}

grid.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-action="delete"]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (confirm('A jeni i sigurt që doni ta fshini këtë makinë?')) {
        await storeHttp.delete(id);
        render();
    }
});

render();
