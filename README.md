# Auto Salon Client

Frontend për aplikacionin **Auto Salon** — sistem menaxhimi për një sallon makinash, me dizajn modern të errët dhe theks të artë.

## Teknologjitë

- **HTML5** / **CSS3** / **JavaScript** (vanilla — pa framework)
- **Custom CSS** me temë të errët luksoze (jo Bootstrap)
- **Fetch API** për komunikim me backend-in

## Faqet

| Faqja | Përshkrimi |
|-------|------------|
| `index.html`      | Dashboard kryesor me statistika dhe meny |
| `inventory.html`  | Lista e të gjitha makinave (grid me karta) |
| `add-car.html`    | Formular për shtimin e një makine të re |
| `edit-car.html`   | Formular për redaktimin e një makine ekzistuese |

## Struktura

```
Auto.Client/
├── index.html
├── inventory.html
├── add-car.html
├── edit-car.html
├── scripts/
│   ├── store-http.js   # Komunikimi me API
│   ├── dashboard.js    # Logjika e dashboard-it
│   ├── inventory.js    # Lista e makinave
│   ├── add-car.js      # Shtimi i makinave
│   └── edit-car.js     # Redaktimi i makinave
└── styles/
    └── main.css        # Dizajni i errët me theks të artë
```

## Si ta ekzekutosh

**1. Sigurohu që backend-i është aktiv** ([Auto.API](https://github.com/Xhoni11/Auto.API)):
```bash
cd Auto.API
dotnet run
```

**2. Hap frontend-in me një server lokal:**
```bash
npx serve .
```

Pastaj hap browser-in në URL-në që të jep `npx serve` (zakonisht `http://localhost:3000`).

## Backend

Ky frontend lidhet me API-në: [Auto.API](https://github.com/Xhoni11/Auto.API) në portin `5280`.
