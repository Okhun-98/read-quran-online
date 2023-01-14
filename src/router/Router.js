import { Route, Routes } from "react-router-dom"
import { DetailSurah } from "../pages/detail-surah/Detail-surah"
import { Home } from "../pages/home/Home"

export const Router = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<DetailSurah />} path="/surah/:title/:id" />
            <Route element={<Home />} path="*" />
        </Routes>
    )
}