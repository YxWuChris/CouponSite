import Banner from "./Banner";
import BrandScroller from "./BrandScroller";
import ProductList from "./ProductList";
import { useMediaQuery } from 'react-responsive';
import ArticleList from "./ArticleList";
import { useState, useEffect } from 'react'
import IconBar from "./IconBar";

const MainBody = ({articleItem,bannerItem,discountItem}) => {

    const mobileWidth = useWindowSize().width
    const mobileHeight = useWindowSize().height

    const container = {
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        minWidth: "800px"
    }

    const mobileContainer = {
        Width: mobileWidth
    }

    // const test = {
    //     backgroundColor:"red",
    //     height:mobileHeight,
    //     width:mobileWidth
    // }

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
        <>
            {isDesktopOrLaptop && <>
                <div style={container}>
                <div style={contentContainer}>
                    <Banner bannerInfo={bannerItem}/>
                    <div style={itemBrandStyle}>
                        <ProductList discountInfo={discountItem}/>
                        <div style={ArticleBrandList}>
                        <ArticleList articleInfo={articleItem}/>
                        <BrandScroller />
                        </div>
                    </div>
                </div>
                </div>
            </>}
            {isTabletOrMobile && <>
                <div style={mobileContainer}>
                <IconBar />
                <div style={mobileContentConatiner}>
                    </div>
                    <div style={itemBrandStyle}>
                        <ProductList discountInfo={discountItem}/>
                    </div>
                </div>
            </>}
        </>
    )

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); 
    return windowSize;
}


}

export default MainBody;
