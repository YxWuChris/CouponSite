import { useMediaQuery } from 'react-responsive'

const Title = () => {


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const titleStyle = {
        width: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
    }

    const logoStyle = {

    }

    const titleInfo = {
        marginTop: "30px",
        marginLeft: "280px",
        color: "#FFB266",

    }


    return (
        <div style={titleStyle}>
            <div style={logoStyle}>
                <a href="https://www.cocopons.com">
                    <img src="/logo.png" alt="my image" />
                </a>
            </div>
            {isDesktopOrLaptop && <>
            <div style={titleInfo}>
                <h2>ココポンズ ・最新人気商品の割引きクーポン情報サイト！</h2>
            </div>
            </>}   
        </div>
    )
}

export default Title;