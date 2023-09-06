import ContailnerNew from "../../components/ContailnerNew"
import ButtonNav from "../../components/ButtonNav"


const Navbar = () => {
    const navItems = ["home", "admission", "notice", "result", "about", "academic", "news"]
    return (
        <div className="bg-blue-900 h-[48px] md:mt-3">
            <ContailnerNew>
                <span>
                    <div className="md:mt-5">
                        <ul className="flex overflow-x-scroll items-center justify-start  mt-2 h-full">

                            {
                                navItems.map(item => <ButtonNav key={item} text={item}></ButtonNav>)
                            }
                        </ul>
                    </div>
                </span>
            </ContailnerNew>
        </div>
    )
}

export default Navbar