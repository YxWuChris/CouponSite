const { default: MainBanner } = require("./MainBanner")
const { default: SubBanner } = require("./SubBanner")

const Banner = () => {

    const BannerContainer = {
        width:"1200px",
        height:"500px",
        display: "flex",
        marginBottom: "20px"
    }

    return (
        <div style={BannerContainer}>
            <MainBanner imgUrl={"https://cnet3.cbsistatic.com/img/2Id9XGv8Nsl99S2rV06r4WNWgqk=/1200x630/2020/10/02/ff037b25-08c5-44ac-b878-07ec601afe87/black-friday-8130.jpg"}/>
            <SubBanner imgUrlAbove={"https://ewscripps.brightspotcdn.com/a3/16/374d33934892be436212b8db11e8/macys.png"} imgUrlBottom={"https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/485/e36/804/f6f9747a3f002c82a6f33b6.jpg_0_0_1_100_9a1d.jpg"} imgUrlBottom={"https://www.pngkit.com/png/detail/223-2232590_sephora-logo.png"}/>
        </div>

    )


}

export default Banner;