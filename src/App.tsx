import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { OrbitFlowPreview } from './pages/OrbitFlowPreview'
import { NorthstarPreview } from './pages/NorthstarPreview'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview/orbitflow" element={<OrbitFlowPreview />} />
        <Route path="/preview/northstar" element={<NorthstarPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
