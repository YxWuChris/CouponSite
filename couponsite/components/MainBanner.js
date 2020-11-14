const MainBanner = (mainInfo) => {

    const MainBannerImgContainer = {
        position:"relative",
        height:"500px",
        width:"800px",
    }

    const MainBannerImg = {
        height:"100%",
        width: "100%"
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
                <img style = {MainBannerImg} src={mainInfo.mainInfo.img} />
            </a>
            <div style={ImgMask}>
                <div style={ImgContent}>
                {mainInfo.mainInfo.title}
                </div>
            </div>
        </div>

    )


}
export default MainBanner;