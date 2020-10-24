const SubBanner = ({ imgUrlAbove, imgUrlBottom }) => {

    const SubBannerImgContainer = {
        width: "400px",
        height: "500px",
    }

    const imgStyle = {
        width: "100%",
        height: "100%",
    }

    const ImgContent = {
        position: "absolute",
        height: "40%",
        width: "100%",
        top: "60%",
        background: "linear-gradient(transparent, black)"
    }

    const AboveContainer = {
        position: "relative",
        height: "50%",
        width: "100%"
    }

    const BottomContainer = {
        position: "relative",
        height: "50%",
        width: "100%"
    }


    return (
        <div style={SubBannerImgContainer}>
            <div style={AboveContainer}>
                <a href="https://www.w3schools.com">
                    <img style={imgStyle} src={imgUrlAbove} />
                </a>
                <div style={ImgContent}>
                </div>
            </div>
            <div style={BottomContainer}>
                <a href="https://www.w3schools.com">
                    <img style={imgStyle} src={imgUrlBottom} />
                </a>
                <div style={ImgContent}>
                </div>
            </div>
        </div>

    )


}
export default SubBanner;