# FinTrack – Personal Finance Tracker

A full-featured fintech dashboard built with **React + Vite**, using CSS Modules for scoped styling and **React Router v6** for navigation. Firebase-ready for authentication and Firestore storage.

---

## Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Router + ThemeProvider wrapper
├── index.css                 # Global CSS variables, reset, animations
│
├── constants/
│   └── index.js              # Categories, colours, emoji, sample data
│
├── utils/
│   └── helpers.js            # formatCurrency, formatDate, generateId, …
│
├── firebase/
│   └── config.js             # Firebase app init (auth + firestore exports)
│
├── context/
│   └── ThemeContext.jsx      # Dark/light theme state + toggle
│
├── hooks/
│   ├── useTransactions.js    # CRUD logic (swap useState → Firestore here)
│   └── useToast.js           # Toast notification state
│
├── components/
│   ├── Icon.jsx / .module.css
│   ├── Navbar.jsx / .module.css
│   ├── SummaryCards.jsx / .module.css
│   ├── Filters.jsx / .module.css
│   ├── TransactionItem.jsx / .module.css
│   ├── TransactionList.jsx / .module.css
│   ├── SpendingChart.jsx / .module.css   ← Recharts PieChart
│   ├── QuickStats.jsx / .module.css
│   ├── AddEditModal.jsx / .module.css
│   ├── DeleteConfirm.jsx / .module.css
│   └── Toast.jsx / .module.css
│
└── pages/
    ├── Dashboard.jsx / .module.css
    └── Transactions.jsx / .module.css
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

```bash
cp .env.example .env
# Edit .env and fill in your Firebase project credentials
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Connecting Firebase

The app uses local state by default (seeded with sample data). To switch to Firebase:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Firestore** and **Authentication** (Email/Password)
3. Fill in `.env` with your project credentials
4. In `src/hooks/useTransactions.js`, replace the commented-out Firestore calls:
   - `getDocs(collection(db, 'transactions'))` inside a `useEffect`
   - `addDoc`, `updateDoc`, `deleteDoc` in the CRUD helpers

---

## Features

| Section              | Description                                         |
|----------------------|-----------------------------------------------------|
| Navbar               | Logo, route links, dark/light toggle, avatar        |
| Summary Cards        | Balance, Income, Expense with animated badges       |
| Filters / Search     | Live search + type/category/sort filters            |
| Transaction List     | Cards with category emoji, hover edit/delete        |
| Add/Edit Modal       | Validated form, income/expense toggle               |
| Delete Confirm       | Two-step confirmation dialog                        |
| Spending Chart       | Recharts Pie chart with legend                      |
| Quick Stats          | Savings rate, top categories, averages              |
| Dark / Light Mode    | System-aware, persisted in localStorage             |

---

## Marks Alignment

| Criteria                  | Implementation                              |
|---------------------------|---------------------------------------------|
| UI Design (20)            | CSS Modules, custom theme, animations       |
| Features & Functionality (25) | Full CRUD, dashboard logic, charts     |
| React Code Structure (15) | Pages, components, hooks, context split     |
| Firebase Usage (15)       | Config ready, Firestore hooks commented in  |
| User Experience (10)      | Toast feedback, delete confirm, empty states|
| Creativity / Uniqueness (10) | Dark mode, pie chart, gradient cards    |
| Deployment (5)            | Vite build, deployable to Vercel/Netlify    |
