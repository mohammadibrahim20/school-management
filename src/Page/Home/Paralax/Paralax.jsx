import React from 'react'
import { Parallax, Background } from 'react-parallax'
import ContailnerNew from '../../../components/ContailnerNew'

const Paralax = () => {
    return (
        <div className=''>

            <div className=''>
                <Parallax
                    blur={{ min: -50, max: 10 }}
                    bgImage={('https://img.freepik.com/free-vector/scene-school_1308-30176.jpg?w=900&t=st=1694059851~exp=1694060451~hmac=485602613eb5165b9536400cae1b40a5196d8792cbab7fa77cd46dd9b72fefe0')}
                    bgImageAlt="the dog"
                    strength={300}
                >
                    <div className="relative">
                        {/* Your content here */}
                        Blur transition from min to max
                        <div style={{ height: '90vh' }} />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-70">

                        </div>
                        <div className='absolute grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <ContailnerNew>
                                <div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt numquam hic quisquam vitae placeat deleniti, reprehenderit rem excepturi? Illum exercitationem blanditiis suscipit in repellendus similique, explicabo quisquam quam, quo iure mollitia sequi repudiandae asperiores? Aliquid illo eveniet at reprehenderit ducimus, veritatis excepturi labore neque odit. Perspiciatis tempore corrupti voluptas.</p>
                            </div>
                            </ContailnerNew>
                        </div>
                    </div>            </Parallax>
            </div>
        </div>
    )
}

export default Paralax