import Banner from "./Banner";
import BrandScroller from "./BrandScroller";
import ProductList from "./ProductList";

const MainBody = () => {

    const container = {
        backgroundColor:"#F5F5F5",
        display:"flex",
        flexDirection: "column",
        paddingTop:"30px"
    }

    const contentContainer = {
        width:"1200px", 
        marginRight:"auto",
        marginLeft:"auto",
    }

    const itemBrandStyle = {
        display:"flex"
    }

    return (
        <div style={container}>
            <div style={contentContainer}>
            <Banner />
            <div style={itemBrandStyle}>
                <ProductList />
                <BrandScroller />
            </div>
            </div>
        </div>
    )


}

export default MainBody;
