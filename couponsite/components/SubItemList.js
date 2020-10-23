
const SubItemList = ({ subItem }) => {

    const subItemImg = {
        maxWidth: "70%"
    }

    const subItemList = {
        display: "flex",
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
                            <p>{subItem.price}</p>
                        </div>

                    ))}
            </div>
        </>

    )

}

export default SubItemList;