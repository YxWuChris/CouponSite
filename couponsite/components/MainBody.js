import Banner from "./Banner";
import BrandScroller from "./BrandScroller";
import ProductList from "./ProductList";
import { useMediaQuery } from 'react-responsive';
import ArticleList from "./ArticleList";

const MainBody = (infoList) => {

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
    
    const ArticleBrandList = {
        display: "flex",
        flexDirection: "column"
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div style={container}>
            {isDesktopOrLaptop && <>
                <div style={contentContainer}>
                    <Banner bannerInfo={infoList.infoList.bannerItem}/>
                    <div style={itemBrandStyle}>
                        <ProductList discountInfo={infoList.infoList.discountItem}/>
                        <div style={ArticleBrandList}>
                        <ArticleList articleInfo={infoList.infoList.ArticleItem}/>
                        <BrandScroller />
                        </div>
                    </div>
                </div>
            </>}
            {isTabletOrMobile && <>

                <div style={mobileContentConatiner}>
                    <div style={itemBrandStyle}>
                        <ProductList discountInfo={infoList.infoList.discountItem}/>
                    </div>
                </div>

            </>}
        </div>
    )


}

export default MainBody;
