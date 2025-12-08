# Enterprise React Redux Counter Application

A production-ready Counter application built with React + Redux Toolkit following enterprise best practices.

## Features

- ✅ Feature-based folder structure
- ✅ Redux Toolkit for state management
- ✅ Sync and Async actions
- ✅ Component composition
- ✅ Separation of concerns
- ✅ Scalable architecture

## Installation

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Enterprise Folder Structure

```
src/
├── app/                          # Redux store setup
│   └── store.js
│
├── features/                     # Feature-based modules
│   └── counter/
│       ├── counterSlice.js       # Redux slice
│       ├── CounterPage.jsx       # Container component
│       └── components/           # Feature-specific components
│           ├── CounterDisplay.jsx
│           ├── CounterControls.jsx
│           └── CounterAmountInput.jsx
│
├── layouts/                      # App layouts
│   └── MainLayout.jsx
│
├── shared/                       # Reusable across features
│   ├── components/
│   ├── hooks/
│   └── utils/
│
├── routes/                       # Routing configuration
├── pages/                        # Route wrapper pages
├── services/                     # API services
├── styles/                       # Global styles
│
├── App.jsx                       # Root component
└── main.jsx                      # Entry point
```

## Architecture Benefits

| Aspect | Benefit |
|--------|---------|
| Feature-based | Easy to scale and maintain |
| Component composition | Reusable and testable |
| Redux Toolkit | Less boilerplate, built-in best practices |
| Separation of concerns | Clear responsibilities |
| Enterprise-ready | Team-friendly structure |

## Counter Features

- **Increment/Decrement**: Basic counter operations
- **Reset**: Reset counter to 0
- **Add Amount**: Add custom amount (sync)
- **Add Async**: Add amount with 1-second delay (async thunk)

## Redux Flow

```
Component → dispatch(action) → Reducer → Store → Component (re-render)
```

## Tech Stack

- React 18
- Redux Toolkit
- Vite
- JavaScript (JSX)
