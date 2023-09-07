
import Heading from './Heading'
import LogoSection from './LogoSection'
import Navbar from './Navbar'
import Header from './Header'
import HomeLayout from '../../Layout/HomeLayout'
import Paralax from './Paralax/Paralax'
import PictureGellery from './Gellery/PictureGellery'

const Home = () => {
  return (
    <div className='relative'>
      <Heading className="md:hidden"></Heading>
      <div className='absulate '>
        <LogoSection />
        <Navbar />
      </div>
      <Header/>
      <HomeLayout/>
      <Paralax/>
      <PictureGellery/>
      <PictureGellery/>
      <PictureGellery/>
      <PictureGellery/>
      <PictureGellery/>
    </div>
  )
}

export default Home