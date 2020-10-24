const { default: MainBanner } = require("./MainBanner")
const { default: SubBanner } = require("./SubBanner")

const Banner = () => {

    const BannerContainer = {
        width:"1200px",
        height:"500px",
        display: "flex",
    }

    return (
        <div style={BannerContainer}>
            <MainBanner imgUrl={"https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/7e9/a76/f96/9194a99c70f23d3fe082f28.jpg_640_0_3_1f84.jpg"}/>
            <SubBanner imgUrlAbove={"https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/7e9/a76/f96/9194a99c70f23d3fe082f28.jpg_640_0_3_1f84.jpg"} imgUrlBottom={"https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/485/e36/804/f6f9747a3f002c82a6f33b6.jpg_0_0_1_100_9a1d.jpg"} imgUrlBottom={"https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/485/e36/804/f6f9747a3f002c82a6f33b6.jpg_0_0_1_100_9a1d.jpg"}/>
        </div>

    )


}

export default Banner;