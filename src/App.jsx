import React from 'react'
import Blogs from './components/pages/Blogs'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Layot from './components/pages/Layot'
import NewInfo from './components/pages/NewInfo'
import Info from './components/pages/Info'
import ErrorPage from './components/pages/ErrorPage'
import { Routes, Route, BrowserRouter } from "react-router-dom"
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layot />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="blogs/:newInfo" element={<NewInfo />} />
                        <Route path="blogs/:info" element={<Info />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App