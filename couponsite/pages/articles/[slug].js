import { articleApi } from '../../Data/Api.js'
import NavBar from '../../components/NavBar'
import Title from '../../components/Title'
import Article from '../../components/Article';
import articleHtml from '../../components/articleHtml'

const Blog = ({slug, htmlString}) => {
    return (
        <div>
            <Title />
            <NavBar />
            <Article articleData={htmlString} />
            {/* <div dangerouslySetInnerHTML={{ __html: htmlString }} /> */}
        </div>
    )
}


export const getStaticPaths = async () => {
    const ArticleList = await fetch(articleApi)
    const files = await ArticleList.json()
    const paths = files.map(articleItem => ({
        params: {slug: articleItem.router},
    }));

    return {
        paths,
        fallback: false
    };
};



export const getStaticProps = async ({ params: { slug } }) => {

    const result =  await fetch(`https://raw.githubusercontent.com/YxWuChris/CPArticle/master/${slug}.html`)
    const htmlString = await result.text()
    
    return {
        props: {
            slug: slug,
            htmlString: htmlString,
        }
    };
};



export default Blog;