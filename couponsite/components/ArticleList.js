import ArticleItem from './ArticleItem'
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const ArticleList = (articleInfo) => {

    const ArticleListContainer = {
        minHeight:"300px",
        width:"280px",
        backgroundColor:"white",
        marginBottom:"50px",
        borderRadius:"10px"
    }

    const TitleStyle = {
        width:"200px",
        color:'#696969',
        marginTop:"15px",
        marginBottom:"30px",
        display:"flex",
        marginLeft:"auto",
        marginRight:"auto",
    }

    const iconStyle = {
        fontSize:"2.3rem"
    }

    const wordsStyle = {
        fontSize:"1.3rem",
        marginTop:"auto",
        marginBottom:"auto",
        marginLeft:"auto",
        marginRight:"auto",

    }

    return(
        <div style={ArticleListContainer}>
            <div style={TitleStyle}>
                <TrackChangesIcon style={iconStyle}/>
                <div style={wordsStyle}>お役立ちブログ</div>
            </div>
            {articleInfo.articleInfo.map(article => (
                <ArticleItem data={article}/>
            ))}
        </div>
    )

}

export default ArticleList;