import { Header } from '../../components/header'
import { HomeMain } from '../../components/home_main'
import { HomeMap } from '../../components/home_main/index_map'
import { Footer } from '../../components/footer/footer'

const Home = () => {
    return(
        <>
            <Header/> 
            <HomeMain/> 
            <HomeMap/> 
            <Footer/> 
        </>
    )
}

export default Home