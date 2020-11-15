const SubBanner = (subInfo) => {

    const SubBannerImgContainer = {
        width: "400px",
        height: "500px",
    }

    const imgStyle = {
        width: "100%",
        height: "100%",
    }

    const ImgMask = {
        position: "absolute",
        height: "40%",
        width: "100%",
        top: "60%",
        background: "linear-gradient(transparent, black)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const AboveContainer = {
        position: "relative",
        height: "50%",
        width: "100%",
        overflow: "hidden",
    }

    const BottomContainer = {
        position: "relative",
        height: "50%",
        width: "100%",
        overflow: "hidden",
    }

    const ImgContent = {
        marginTop: "5%",
        color: "White",
        fontSize: "1rem"
    }

    console.log(subInfo)

    return (
        <div style={SubBannerImgContainer}>
            <div style={AboveContainer}>
                <a href={subInfo.aboveInfo.link}>
                    <img className="subBanner" src={subInfo.aboveInfo.img} />
                </a>
                <div style={ImgMask}>
                    <a href={subInfo.aboveInfo.link}>
                        <div className="subBanner-title-link">{subInfo.aboveInfo.title}</div>
                    </a>
                </div>
            </div>
            <div style={BottomContainer}>
                <a href={subInfo.belowInfo.link}>
                    <img className="subBanner" src={subInfo.belowInfo.img} />
                </a>
                <div style={ImgMask}>
                    <a href={subInfo.belowInfo.link}>
                        <div className="subBanner-title-link">{subInfo.belowInfo.title}</div>
                    </a>
                </div>
            </div>
        </div>

    )


}
export default SubBanner;