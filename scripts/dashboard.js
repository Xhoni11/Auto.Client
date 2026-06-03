async function loadDashboard() {
    try {
        const cars = await storeHttp.getAll();
        const total = cars.length;
        const available = cars.filter(c => c.neShitje).length;
        const totalValue = cars.reduce((sum, c) => sum + c.cmimi, 0);
        const avgPrice = total > 0 ? totalValue / total : 0;

        document.getElementById('stat-total').textContent = total;
        document.getElementById('stat-available').textContent = available;
        document.getElementById('stat-value').textContent = formatPrice(totalValue);
        document.getElementById('stat-avg').textContent = formatPrice(Math.round(avgPrice));
    } catch (err) {
        console.error(err);
        document.getElementById('stat-total').textContent = '–';
        document.getElementById('stat-available').textContent = '–';
        document.getElementById('stat-value').textContent = '–';
        document.getElementById('stat-avg').textContent = '–';
    }
}

loadDashboard();
