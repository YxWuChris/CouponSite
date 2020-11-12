import Banner from "./Banner";
import BrandScroller from "./BrandScroller";
import ProductList from "./ProductList";
import { useMediaQuery } from 'react-responsive';

const MainBody = (itemList) => {

    const container = {
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        minWidth: "800px"
    }

    const contentContainer = {
        width: "1200px",
        marginRight: "auto",
        marginLeft: "auto",
    }

    const mobileContentConatiner = {
        width: "800px",
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
            {isDesktopOrLaptop && <>
                <div style={contentContainer}>
                    <Banner />
                    <div style={itemBrandStyle}>
                        <ProductList itemList={itemList}/>
                        <BrandScroller />

                    </div>
                </div>
            </>}
            {isTabletOrMobile && <>

                <div style={mobileContentConatiner}>
                    <div style={itemBrandStyle}>
                        <ProductList itemList={itemList}/>
                    </div>
                </div>

            </>}
        </div>
    )


}

export default MainBody;
