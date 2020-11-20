import { useMediaQuery } from 'react-responsive'

const Title = () => {


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const titleStyle = {
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
    }

    const logoStyle = {

    }

    const titleInfo = {
        marginTop: "30px",
        marginLeft: "280px",
        color: "coral",

    }
    
    const h2Style = {
        fontSize:"1.5rem"

    }
    const mobileTitleStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
    }


    return (
        <>
        {/* {isDesktopOrLaptop && <> */}
        <div style={titleStyle}>
            <div style={logoStyle}>
                <a href="https://www.cocopons.com">
                    <img src="/logo.png" alt="my image" />
                </a>
            </div>

            {isDesktopOrLaptop && <>
            <div style={titleInfo}>
                <h2 style={h2Style}>ココポンズ ・最新人気商品の割引きクーポン情報サイト！</h2>
            </div>
            </>}
        </div>
        {/* </>}  */}

        {/* {isTabletOrMobile && <>
        <div style = {mobileTitleStyle}>
         <div style={logoStyle}>
                <a href="https://www.cocopons.com">
                    <img src="/logo.png" alt="my image" />
                </a>
            </div>
        </div>
        </>} */}
        </>
    )
}

export default Title;