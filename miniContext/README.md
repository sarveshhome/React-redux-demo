# React + Vite

# Create Project 

`yarn create vite miniContext`


# miniContext

A minimalist implementation of React Context API demonstrating state management in React applications.

## Description

This project showcases the usage of React's Context API for efficient state management across components without prop drilling.

## Features

- Lightweight context implementation
- Easy-to-understand state management
- Centralized state control
- Example of context provider and consumer patterns

## Installation

```bash


# Navigate to project directory
cd miniContext

# Install dependencies
npm install

yarn 

# Start the development server
npm run dev

yarn dev

# Usage



```javascript
// Example of how to use the context in your components
import { useContext } from 'react'
import { YourContext } from './context/YourContext'

function ExampleComponent() {
  const { state, setState } = useContext(YourContext)
  // Your component logic here
}
```

Tech Stack
   -- React

   -- Vite

   -- Context API


### Project Structure

```
miniContext/
├── src/
│   ├── components/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

