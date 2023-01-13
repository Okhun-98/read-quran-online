import "./SurahCard.css"

export const SurahCard = ({ surah }) => {
    return (
        <div className="surah-card">
            <h3 className="surah-id">{surah?.id}</h3>
            <div className="surah-data">
                <level className="surah-span span-left span-top">{surah?.transliteration}</level>
                <level className="surah-span span-right span-name">{surah?.name}</level>
                <level className="surah-span span-left span-name span-hover">{surah?.translation}</level>
                <level className="surah-span span-right span-name span-hover">{surah?.total_verses} Ayahs</level>
            </div>
        </div>
    )
}