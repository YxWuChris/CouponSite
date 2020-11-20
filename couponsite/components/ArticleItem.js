const ArticleItem = () => {

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


    return (
        <a href="/articles/ReportTax">
            <div className="articleItem">
                <div style={TitleImgContainer}>
                    <img style={TitleImg} src="https://i.guim.co.uk/img/media/32e9869ed021117650176c0da473f134fcbe65a3/0_166_5000_3002/master/5000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=30b15f98c1df58ad88bd3b0e649610f8" />
                </div>
                <div style={TitleContentContainer}>
                    米国の納税申告書が届くまでにどのくらいかかるの
                </div>
            </div>
        </a>
    )

}

export default ArticleItem;