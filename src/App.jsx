import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { MainSection } from "./components/MainSection"
import PageNotFound from "./components/PageNotFound"
import { ThemeProvider } from "./components/ThemeProvider"
import OnBoarding from "./components/OnBoarding"
import Organization from "./components/Organization"
import Signin from "./auth/Signin"
import Signup from "./auth/Signup"





function App() {
  return (
    <div className="body-background">
      <section className="sm:bg-none md:bg-[url(./Hero/shape-01.svg)] bg-right-top bg-no-repeat h-screen">
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route path="/organization/:id" element ={<Organization/>} />
            <Route path="/sign-in" element ={<Signin/>} />
            <Route path="/sign-up" element ={<Signup/>} />
          </Routes>
        </ThemeProvider>
      </section>
    </div>
  )
}

export default App
