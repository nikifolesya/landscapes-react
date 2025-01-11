import { Header } from '../../components/header/header'
import { HomeMain } from '../../components/home_main'
// import { HomeMap } from '../../components/home_main/index_map'
import { Footer } from '../../components/footer/footer'
import { Review } from '../../components/home_main/review'
import 'pure-react-carousel/dist/react-carousel.es.css';


const Home = () => {
    return(
        <>
            <Header/> 
            <HomeMain/> 
            {/* <HomeMap/>  */}
            <Review/>
            <Footer/> 
        </>
    )
}

export default Home