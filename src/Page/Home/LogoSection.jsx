import ContailnerNew from "../../components/ContailnerNew"

const LogoSection = () => {
    return (
        <ContailnerNew>
            <div className="flex justify-between h-[100px] py-2">
                <figure>
                    <img className="object-cover bg-cover h-12 md:h-24" src="https://seeklogo.com/images/B/bangladesh-govt-logo-A2C7688845-seeklogo.com.png" alt="" />
                </figure>
                <div className="md:space-y-2 py-3">
                    <h1 className="md:text-3xl font-extrabold">সরকারী উচ্চ বিদ্যালয়</h1>
                    <h1 className="md:text-3xl font-extrabold">Govt High School, Chattogram</h1>
                </div>
                <figure>
                <img className="object-cover bg-cover h-12 md:h-24" src="https://seeklogo.com/images/B/bangladesh-govt-logo-A2C7688845-seeklogo.com.png" alt="" />
                </figure>
            </div>
        </ContailnerNew>
    )
}

export default LogoSection