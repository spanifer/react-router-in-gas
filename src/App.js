import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Nav } from "./components/Nav"

export function App() {
    return  <>
                <Nav />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </>
}