
const SubItemList = ({ subItem }) => {

    const subItemImg = {
        maxWidth: "70%"
    }

    const subItemList = {
        display: "flex",
    }

    const delPrice = {
        color: "gray",
        display: "inline-block"
    }

    const currPrice = {
        color: "red",
        display:"inline-block",
        marginRight:"10px"
    }

    const price = {
        display:"inline-block"
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
                            <p>{subItem.title}</p>
                            <div style={price}>
                                <p style={currPrice}>${subItem.price}</p>
                                <del style={delPrice}>${subItem.o_price}</del>
                            </div>
                        </div>

                    ))}
            </div>
        </>

    )

}

export default SubItemList;