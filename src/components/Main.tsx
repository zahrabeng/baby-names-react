import allBabyNames from "../babynames.json"
const babyNames = [...allBabyNames]


export default function Main():JSX.Element{

    function arrOfnames(){
        const allNames = babyNames.map((eachName) => <button key={eachName.id}>{eachName.name}</button>)
        return allNames
    }


    return(
        <>
        {arrOfnames()}
        </>

    )
}