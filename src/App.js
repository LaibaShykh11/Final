import { Footer } from './components/Footer'
import { Header } from './components/Header'
import WelcomePage from './components/WelcomePage'
import AllProducts from './components/AllProducts'
import { AllProjects } from './components/Projects'
import { Route, Routes } from 'react-router-dom'
import Reviews from './components/Reviews'
import { MyInformationProvider } from './context/PersonalInfoContext'
import './index.css'

function App() {
  return (
    <MyInformationProvider>
      <div>
        <Header />
        <Routes>
          <Route path={'/'} element={<WelcomePage />} />
          <Route path={'/all-projects'} element={<AllProjects />} />
          <Route path={'/products'} element={<AllProducts />} />
          <Route path={'/reviews'} element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
    </MyInformationProvider>
  )
}

export default App
