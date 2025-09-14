# React + Vite


# Theme Switcher with Context

A React application demonstrating theme switching functionality using React Context API. This project showcases how to implement dark/light theme switching across an entire application efficiently.

## 🚀 Features

- Dynamic theme switching (Dark/Light mode)
- Persistent theme selection using localStorage
- Context API implementation
- Responsive design
- Custom theme configuration

## 🛠️ Technologies Used

- React 
- Vite
- Context API
- CSS Variables
- localStorage


4. Start the development server:

`npm run dev`

`yarn dev`


```javascript 
// Example of how to use the theme context in your components
import { useTheme } from './contexts/ThemeContext'

function ExampleComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className={`component ${theme}`}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

```

📁 Project Structure

```
themeswitcherwithcontext/
├── src/
│   ├── components/
│   │   ├── ThemeButton/
│   │   └── Card/
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── styles/
│   │   └── theme.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```