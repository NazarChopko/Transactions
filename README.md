# 💳 Wallet App

A mobile-first application for managing bank cards and viewing transactions. Built with React + TypeScript using modern development practices.

## 📱 Features

- **Dashboard** — View card balance, available funds, payment status, and bonus points
- **Transaction List** — Scrollable history of all operations
- **Transaction Details** — Complete information about selected transaction
- **Lazy Loading** — Lazy-loaded pages for optimization
- **Skeleton Loading** — Animated skeletons during data fetching

## 🛠 Tech Stack

- **React 19** — UI library
- **TypeScript** — Static typing
- **Vite** — Build tool & dev server
- **React Router** — Routing
- **CSS Modules** — Component styling
- **ESLint** — JavaScript/TypeScript linting
- **Stylelint** — CSS linting
- **Prettier** — Code formatting

## 📁 Project Structure

```
src/
├── api/                 # API functions for data fetching
├── components/          # React components
│   ├── Dashboard/       # Balance panel
│   ├── Loader/          # Loading component
│   ├── MerchantLogo/    # Merchant logos
│   ├── TransactionDetail/   # Transaction details
│   └── TransactionList/     # Transaction list
├── data/                # Mock data
├── hooks/               # Custom React hooks
├── pages/               # Application pages
├── styles/              # Global styles & variables
├── types/               # TypeScript types
└── utils/               # Utilities & helpers
```

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📝 Scripts

| Script                 | Description                |
| ---------------------- | -------------------------- |
| `npm run dev`          | Start dev server           |
| `npm run build`        | Build for production       |
| `npm run preview`      | Preview production build   |
| `npm run lint`         | Lint TypeScript/JavaScript |
| `npm run lint:css`     | Lint CSS files             |
| `npm run lint:css:fix` | Auto-fix CSS files         |
| `npm run format`       | Format code with Prettier  |
| `npm run format:check` | Check code formatting      |

## 🎨 Styling

The project uses **CSS Modules** for style isolation and **CSS Variables** for colors:

```css
:root {
  --color-primary: #007aff;
  --color-text-primary: #1d1d1f;
  --color-text-secondary: #86868b;
  --color-bg-page: #f2f2f7;
  --color-bg-card: #f5f5f7;
  --color-border: #e5e5ea;
}
```

## 📐 Architecture

- **API Layer** — Handles data fetching (fetch request emulation)
- **Hooks** — State management and logic
- **Components** — Presentational components
- **Utils** — Formatting functions and helpers
- **Types** — TypeScript interfaces

## 📄 License

MIT
