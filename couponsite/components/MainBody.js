import Banner from "./Banner";
import ProductList from "./ProductList";

const MainBody = () => {

    const container = {
        backgroundColor:"#F5F5F5",
        display:"flex",
        flexDirection: "column",
        paddingTop:"30px"
    }

    const contentContainer = {
        maxWidth:"1800px", 
        marginRight:"auto",
        marginLeft:"auto"
    }

    return (
        <div style={container}>
            <div style={contentContainer}>
            <Banner />
            <ProductList />
            </div>
        </div>
    )


}

export default MainBody;
