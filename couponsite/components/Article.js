const ArticleContainer = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "1200px",
    backgroundColor:"white",
    paddingBottom:"100px"
}

const BodyContainer = {
    backgroundColor: "#F5F5F5",
}

const ContentContainer = {
    width: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
}

const Article = (articleData) => {
    return (
        <div style={BodyContainer}>
            <div style={ArticleContainer}>
                <div style={ContentContainer}>
                    <div dangerouslySetInnerHTML={{ __html: articleData.articleData }} />
                </div>
            </div>
        </div>

    )
}

export default Article;