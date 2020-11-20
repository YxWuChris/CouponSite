const ArticleItem = (data) => {

    const TitleImgContainer = {
        height: "100px",
        width: "100px",
        marginTop: "auto",
        marginLeft: "5px",
        marginBottom: "auto",
    }

    const ContentContainer = {
        display: "flex",
        flexDirection: "column",

    }


    const TitleImg = {
        height: "100%",
        width: "100%"
    }

    const Container = {
        height: "120px",
        display: "flex"
    }

    const TitleContentContainer = {
        marginLeft: "10px",
        marginright: "10px",
        height: "100px",
        width: "150px",
        marginTop: "auto",
        marginBottom: "auto"
    }

    const mainTitle = {
        marginBottom:"5px"

    }
    const subTitle = {
        color:"coral"

    }
    
    return (
        <a href={data.data.link}>
            <div className="articleItem">
                <div style={TitleImgContainer}>
                    <img style={TitleImg} src={data.data.img} />
                </div>
                <div style={TitleContentContainer}>
                    <div style={mainTitle}>
                    {data.data.title}
                    </div>
                    <div style={subTitle}>
                    {data.data.subTitle}
                    </div>
                </div>
            </div>
        </a>
    )

}

export default ArticleItem;