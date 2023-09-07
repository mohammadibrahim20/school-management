
import LeftSide from '../Page/Home/LeftSide'
import RightSide from '../Page/Home/RightSide'
import ContailnerNew from '../components/ContailnerNew'

const HomeLayout = () => {
    return (

        <ContailnerNew>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className="md:col-span-3">

                    <LeftSide />
                </div>
                <RightSide />
            </div>
        </ContailnerNew>

    )
}

export default HomeLayout