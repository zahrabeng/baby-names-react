//import allBabyNames from "../babynames.json"
import arrOfNames from "./reorderNames"

export default function Main():JSX.Element{
 


    return(
        <>
        <header>
            <h1>Baby Names</h1>
        </header>
        <main>
            <input placeholder="search name ..."/>
        <hr/>
            {arrOfNames()} 
        </main>

        </>

    )
}