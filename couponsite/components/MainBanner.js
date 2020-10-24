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

    const ImgContent = {
        position:"absolute",
        height: "40%",
        width: "100%",
        top:"60%",
        background: "linear-gradient(transparent, black)"
    }

    return (
        <div style={MainBannerImgContainer}>
            <a href="https://www.w3schools.com">
                <img style = {MainBannerImg} src={imgUrl} />
            </a>
            <div style={ImgContent}>
            </div>
        </div>

    )


}
export default MainBanner;