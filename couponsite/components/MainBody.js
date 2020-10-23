import Banner from "./Banner";
import ProductList from "./ProductList";

const MainBody = () => {

    const container = {
        backgroundColor:"#F5F5F5"
    }

    return (
        <div style={container}>
            <Banner />
            <ProductList />
        </div>
    )


}

export default MainBody;
