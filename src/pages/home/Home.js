import { useEffect, useState } from "react"
import { SurahCard } from "../../components/surah-card/SurahCard"
import { Banner } from "../../containers/banner/Banner"
import { language } from "../../stores/languages"
import { loader } from "../../stores/loader"
import "./Home.css"


export const Home = () => {
    const [surahs, setSurahs] = useState([])

    useEffect(() => {
        language.subscribe((item) => {
            getSurahs(item?.lan)
        })
    }, [language])

    const getSurahs = async (lan) => {
        try {
            loader.setKey("loading", true)
            const response = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_${lan}.json`)
            const data = await response.json()
            setSurahs(data)
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => {
                loader.setKey("loading", false)
            }, 500)
        }
    }

    return (
        <div className="home">
            <Banner />
            <div className="surahs">
                {surahs?.length ? surahs?.map((surah) => {
                    return <SurahCard surah={surah} key={surah?.id} />
                }) : <h1 className="error-surahs">at the moment our servise not working please try again later...</h1>}
            </div>
        </div>
    )
}