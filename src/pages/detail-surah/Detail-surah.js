import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


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
        <div>
            <h1>{surah?.transliteration}</h1>
            {surah?.verses.map((ayat) => {
                return (
                    <div>
                        <h2 className="surah-right">{ayat?.text}</h2>
                        <h3 className="surah-left">{ayat?.translation}</h3>
                    </div>
                )
            })}
        </div>
    )
}