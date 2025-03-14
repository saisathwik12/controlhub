import { Header } from "./components/Header"
import { MainSection } from "./components/MainSection"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <div className="body-background">
      <ThemeProvider>
        <MainSection />
      </ThemeProvider>
    </div>
  )
}

export default App
