import "./SurahCard.css"

export const SurahCard = ({ surah }) => {
    return (
        <div className="surah-card">
            <h3 className="surah-id">{surah?.id}</h3>
            <div className="surah-data">
                <level className="surah-span span-left">{surah?.transliteration}</level>
                <level className="surah-span span-right">{surah?.name}</level>
                <level className="surah-span span-left">{surah?.translation}</level>
                <level className="surah-span span-right">{surah?.total_verses} Ayahs</level>
            </div>
        </div>
    )
}