
import Heading from './Heading'
import LogoSection from './LogoSection'
import Navbar from './Navbar'
import Header from './Header'
import HomeLayout from '../../Layout/HomeLayout'

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
    </div>
  )
}

export default Home