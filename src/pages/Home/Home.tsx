import { Header } from '../../components/Header/header'
import { MainWindow } from '../../components/MainWindow/MainWindow'
import { Footer } from '../../components/Footer/footer'
import { Review } from '../../components/ReviewCarousel/review'
import 'pure-react-carousel/dist/react-carousel.es.css';


const Home = () => {
    return(
        <>
            <Header/> 
            <MainWindow/> 
            <Review/>
            <Footer/> 
        </>
    )
}

export default Home