const ArticleContainer = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "1200px"
}

const BodyContainer = {
    backgroundColor: "#F5F5F5",
}

const Article = (articleData) => {
    return (
        <div style={BodyContainer}>
            <div style={ArticleContainer}>
                <div dangerouslySetInnerHTML={{ __html: articleData.articleData }} />
            </div>
        </div>

    )
}

export default Article;