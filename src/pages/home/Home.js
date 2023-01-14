import { useEffect, useState } from "react"
import { SurahCard } from "../../components/surah-card/SurahCard"
import { Banner } from "../../containers/banner/Banner"
import "./Home.css"


export const Home = () => {
    const [surahs, setSurahs] = useState([])
    useEffect(() => { getSurahs() }, [])

    const getSurahs = async () => {
        const response = await fetch("https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_en.json")
        const data = await response.json()
        setSurahs(data)
    }
    return (
        <div className="home">
            <Banner />
            <div className="surahs">
                {surahs?.map((surah) => {
                    return <SurahCard surah={surah} />
                })}
            </div>
        </div>
    )
}