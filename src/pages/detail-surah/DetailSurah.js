import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./DetailSurah.css"
import { language } from "../../stores/languages"
import { loader } from "../../stores/loader"


export const DetailSurah = () => {
    const params = useParams()
    const [surah, setSurah] = useState()

    useEffect(() => {
        language.subscribe((item) => {
            getSurah(item?.lan)
        })
    }, [language])

    async function getSurah(lan) {
        try {
            loader.setKey("loading", true)
            const response = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/${lan}/${params?.id}.json`)
            const data = await response.json()
            setSurah(data)
        } catch (error) {
            console.log(error)
        } finally {
            loader.setKey("loading", false)
        }

    }
    const ConvertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return new String(num).replace(/[0123456789]/g, (d) => { return arabicNumbers[d] });
    }

    return (
        <div className="surah-detail">
            <div className="header-detail">
                <Link to="/" className="btn-detail-back"><i className="fa fa-arrow-left"></i> </Link>
                {/* <h1 className="titel-detail-translate">{surah?.transliteration}</h1> */}
            </div>
            <h1 className="title-detail-orginal">سورة {surah?.name}</h1>
            {surah?.verses.map((ayat, index) => {
                return (
                    <div className="ayat-detail" key={index}>
                        <h2 className="ayat-orginal">{ayat?.text} <span className="arabic-number">{ConvertToArabicNumbers(ayat?.id)}</span></h2>
                        <h3 className="ayat-translation">{ayat?.translation}</h3>
                    </div>
                )
            })}
        </div>
    )
}