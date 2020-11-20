import ArticleItem from './ArticleItem'

const ArticleList = () => {

    const ArticleListContainer = {
        minHeight:"300px",
        width:"280px",
        backgroundColor:"white",
        marginBottom:"20px",
        borderRadius:"10px"
    }

    const TitleStyle = {
        width:"160px",
        color:'#696969',
        fontSize:"1.5rem",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"15px",
        marginBottom:"30px"
    }

    return(
        <div style={ArticleListContainer}>
            <div style={TitleStyle}>実用的な記事</div>
            <ArticleItem />
        </div>
    )

}

export default ArticleList;