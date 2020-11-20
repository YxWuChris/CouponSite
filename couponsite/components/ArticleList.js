import ArticleItem from './ArticleItem'

const ArticleList = (articleInfo) => {

    const ArticleListContainer = {
        minHeight:"300px",
        width:"280px",
        backgroundColor:"white",
        marginBottom:"20px",
        borderRadius:"10px"
    }

    const TitleStyle = {
        width:"170px",
        color:'#696969',
        fontSize:"1.5rem",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"15px",
        marginBottom:"30px"
    }
    
    return(
        <div style={ArticleListContainer}>
            <div style={TitleStyle}>お役立ちブログ</div>
            {articleInfo.articleInfo.map(article => (
                <ArticleItem data={article}/>
            ))}
        </div>
    )

}

export default ArticleList;