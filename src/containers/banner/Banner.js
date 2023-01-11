import bannerImg from "../../images/quran.png"
import "./Banner.css"

export const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-img" src={bannerImg} alt="Img of banner" />
        </div>
    )
}