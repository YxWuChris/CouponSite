const MainBanner = ({ imgUrl }) => {

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
            <a href="https://www.cocopons.com">
                <img style = {MainBannerImg} src={imgUrl} />
            </a>
            <div style={ImgMask}>
                <div style={ImgContent}>
                ブラックフライデー情報
                </div>
            </div>
        </div>

    )


}
export default MainBanner;