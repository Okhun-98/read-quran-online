import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"

export const Router = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="*" />
        </Routes>
    )
}