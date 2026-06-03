const API_BASE_URL = "http://localhost:5280/cars";

const storeHttp = {
    async getAll() {
        const res = await fetch(API_BASE_URL);
        if (!res.ok) throw new Error(`Gabim: ${res.status}`);
        return res.json();
    },
    async getById(id) {
        const res = await fetch(`${API_BASE_URL}/${id}`);
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`Gabim: ${res.status}`);
        return res.json();
    },
    async add(car) {
        const res = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(car)
        });
        if (!res.ok) throw new Error(`Gabim: ${res.status}`);
        return res.json();
    },
    async update(id, car) {
        const res = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...car, id })
        });
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(`Gabim: ${res.status}`);
        return true;
    },
    async delete(id) {
        const res = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(`Gabim: ${res.status}`);
        return true;
    }
};

function formatPrice(n) {
    return new Intl.NumberFormat('de-DE').format(n) + ' €';
}

function formatKm(n) {
    return new Intl.NumberFormat('de-DE').format(n) + ' km';
}
