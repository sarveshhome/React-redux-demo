import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="d-flex flex-wrap min-vh-100 align-items-center">
          <div className="w-100">
              <div className="container-sm d-flex justify-content-end mb-3">
                  <ThemeBtn />
              </div>

              <div className="container-sm">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App