import Banner from "./Banner";
import BrandScroller from "./BrandScroller";
import ProductList from "./ProductList";
import { useMediaQuery } from 'react-responsive';

const MainBody = () => {

    const container = {
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px"
    }

    const contentContainer = {
        width: "1200px",
        marginRight: "auto",
        marginLeft: "auto",
    }

    const itemBrandStyle = {
        display: "flex"
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div style={container}>

            <div style={contentContainer}>
                {isDesktopOrLaptop && <> 
                    <Banner />
                </>}
                <div style={itemBrandStyle}>
                    <ProductList />
                    {isDesktopOrLaptop && <>
                        <BrandScroller />
                    </>}
                </div>
            </div>
        </div>
    )


}

export default MainBody;
