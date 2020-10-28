
const SubItemList = ({ subItem }) => {

    const subItemImg = {
        maxWidth: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px"
    }

    const subItemList = {
        marginTop:"20px",
        display: "flex",
    }

    const delPrice = {
        color: "#A0A0A0",
        display: "inline-block"
    }

    const currPrice = {
        color: "#FF6347 ",
        display: "inline-block",
        marginRight: "10px",
        fontWeight:"bold"
    }

    const price = {
        marginLeft: "auto",
        marginRight: "auto",
        display: "inline-block"
    }

    const TitleStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        color: "#707070",
        fontFamily:"Times New Roman"
    }

    return (
        <>
            <div style={subItemList}>
                {
                    // <div style={subItemList}>
                    subItem.map(subItem => (
                        <div className="subItem">
                            <img
                                style={subItemImg}
                                src={subItem.img}
                            />
                            <div style={price}>
                                <p style={currPrice}>${subItem.price}</p>
                                <del style={delPrice}>${subItem.o_price}</del>
                            </div>
                            <div style={TitleStyle}>
                                    {subItem.title}
                            </div>
                        </div>

                    ))}
            </div>
        </>

    )

}

export default SubItemList;