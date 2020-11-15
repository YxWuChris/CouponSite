const { default: MainBanner } = require("./MainBanner")
const { default: SubBanner } = require("./SubBanner")

const Banner = (bannerInfo) => {

    const BannerContainer = {
        width:"1200px",
        height:"500px",
        display: "flex",
        marginBottom: "20px",
        overflow: "hidden",
    }

    return (
        <div style={BannerContainer}>
            <MainBanner mainInfo={bannerInfo.bannerInfo.MainBanner}/>
            <SubBanner aboveInfo={bannerInfo.bannerInfo.AboveBanner} belowInfo={bannerInfo.bannerInfo.BelowBanner}/>
        </div>

    )


}

export default Banner;