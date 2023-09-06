import Level from "../../components/Level"


const Card = ({name, position}) => {
    return (
        <div >
            <Level title="PRINCIPAL"></Level>
            <figure className="flex justify-center items-center">
                <img className="h-[320px] w-[180xp] border drop-shadow-xl mt-5" src="https://gccc.edu.bd/wp-content/uploads/2022/01/principalgccc.jpg" alt="" />
            </figure>
            <div className="mt-3 text-center px-3">
                <h3 className="font-bold text-xl text-gray-700">{name}</h3>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default Card