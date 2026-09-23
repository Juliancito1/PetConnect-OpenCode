import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Adoptar from './pages/Adoptar.jsx'
import PetDetail from './pages/PetDetail.jsx'
import DarEnAdopcion from './pages/DarEnAdopcion.jsx'
import SobreNosotros from './pages/SobreNosotros.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoptar" element={<Adoptar />} />
            <Route path="/adoptar/:id" element={<PetDetail />} />
            <Route path="/dar-en-adopcion" element={<DarEnAdopcion />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/iniciar-sesion" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App