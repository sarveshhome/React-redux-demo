# React Redux Demo Practice

A minimal React + Redux Toolkit counter application.

## Features

- Redux Toolkit for state management
- Counter with increment/decrement actions
- React-Redux hooks (useSelector, useDispatch)

## Installation

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Project Structure

```
src/
├── Store/
│   └── store.js           # Redux store configuration
├── features/
│   └── counter/
│       ├── Counter.jsx    # Counter component
│       └── counterSlice.js # Counter slice with reducers
├── App.jsx                # Root component
└── main.jsx               # Entry point with Provider
```

## Redux Setup

### Store (store.js)
- Configures Redux store with counter reducer

### Counter Slice (counterSlice.js)
- **State**: `{ value: 0 }`
- **Actions**: increment, decrement, incrementByAmount

### Counter Component
- Uses `useSelector` to read state
- Uses `useDispatch` to dispatch actions
