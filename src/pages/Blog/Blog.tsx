import { Header } from '../../components/header/header2'
import { BlogPosts } from '../../components/blog_posts/blog_posts'
import { Footer } from '../../components/footer/footer'
import 'pure-react-carousel/dist/react-carousel.es.css';


const Blog = () => {
    return(
        <>
            <Header/> 
            <BlogPosts/>
            <Footer/> 
        </>
    )
}

export default Blog
