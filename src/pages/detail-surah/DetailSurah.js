import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./DetailSurah.css"


export const DetailSurah = () => {
    const params = useParams()
    const [surah, setSurah] = useState()

    useEffect(() => {
        getSurah()
    }, [])

    const getSurah = async () => {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/${params?.id}.json`)
        const data = await response.json()
        console.log(data)
        setSurah(data)
    }
    return (
        <div className="surah-detail">
            <div className="header-detail">
                <Link to="/" className="btn-detail-back">{"< back"} </Link>
                <h1 className="titel-detail-translate">{surah?.transliteration}</h1>
            </div>
            <h1 className="title-detail-orginal">سورة {surah?.name}</h1>
            {surah?.verses.map((ayat) => {
                return (
                    <div className="ayat-detail">
                        <h2 className="ayat-orginal">{ayat?.text}</h2>
                        <h3 className="ayat-translation">{ayat?.translation}</h3>
                    </div>
                )
            })}
        </div>
    )
}