
const SubItemList = ({ subItem }) => {


    const subItemImg = {
        width: "150px",
        height: "150px",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "10px"
    }

    const subItemList = {
        marginTop:"20px",
        display: "flex",
        marginBottom:"20px"
    }

    const delPrice = {
        color: "#A0A0A0",
        display: "inline-block"
    }

    const currPrice = {
        color: "#FF6347 ",
        display: "inline-block",
        marginRight: "10px",
        fontSize:"1.2rem"
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

    // const subItems = subItem.split(";")
    // const subItemsJson = []
    // for(var i = 0; i < subItems.length; i++){
    //     subItemsJson.push(JSON.parse(subItems[i]))
    // }

    return (
        <>
            <div style={subItemList}>
                {
                    // <div style={subItemList}>
                    subItem.map(subItem => (
                        <div key = {subItem} className="subItem">
                            <a href={subItem.link}>
                            <img
                                style={subItemImg}
                                src={subItem.img}
                            />
                            </a>
                            <div style={price}>
                                <p style={currPrice}>${subItem.price}</p>
                                {subItem.o_price? (
                                   <del style={delPrice}>${subItem.o_price}</del>
                                ):(
                                    <div></div>
                                )}
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