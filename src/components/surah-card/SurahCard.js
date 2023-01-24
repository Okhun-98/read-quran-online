import { Link } from "react-router-dom"
import "./SurahCard.css"

export const SurahCard = ({ surah }) => {
    return (
        <Link to={"/surah/" + surah?.transliteration + "/" + surah?.id} className="surah-card">
            <h3 className="surah-id">{surah?.id}</h3>
            <div className="surah-data">
                <span className="surah-span span-left span-top">{surah?.transliteration}</span>
                <span className="surah-span span-right span-name">{surah?.name}</span>
                <span className="surah-span span-left span-name span-hover">{surah?.translation}</span>
                <span className="surah-span span-right span-name span-hover">{surah?.total_verses} Ayahs</span>
            </div>
        </Link>
    )
}