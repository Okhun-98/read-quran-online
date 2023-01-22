import { useEffect, useState } from "react"
import { SurahCard } from "../../components/surah-card/SurahCard"
import { Banner } from "../../containers/banner/Banner"
import { language } from "../../stores/languages"
import "./Home.css"


export const Home = () => {
    const [surahs, setSurahs] = useState([])

    useEffect(() => {
        language.subscribe((item) => {
            getSurahs(item?.lan)
        })
    }, [language])

    const getSurahs = async (lan) => {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_${lan}.json`)
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