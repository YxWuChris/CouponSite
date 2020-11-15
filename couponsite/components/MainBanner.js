const MainBanner = (mainInfo) => {

    const MainBannerImgContainer = {
        position:"relative",
        height:"500px",
        width:"800px",
    }

    const MainBannerImg = {
        height:"100%",
        width: "100%",
    }

    const ImgMask = {
        position:"absolute",
        height: "40%",
        width: "100%",
        top:"60%",
        background: "linear-gradient(transparent, black)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }

    const ImgContent = {
        marginTop:"5%",
        color: "White",
        fontSize:"2rem"
    }

    return (
        <div style={MainBannerImgContainer}>
            <a href={mainInfo.mainInfo.link}>
                <img className="mainBanner" src={mainInfo.mainInfo.img} />
            </a>
            <div style={ImgMask}>
                <div className="mainBanner-title-link">
                <a href={mainInfo.mainInfo.link}>{mainInfo.mainInfo.title}</a>
                </div>
            </div>
        </div>

    )


}
export default MainBanner;