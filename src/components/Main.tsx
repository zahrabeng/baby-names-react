import allBabyNames from "../babynames.json"
import sorting from "./reorderNames";
import { babyNameInfo } from "./reorderNames";
import { useState } from "react"

 

export default function Main():JSX.Element{
    const babyNames:babyNameInfo[] = [...allBabyNames]

    const [searchText, setSearchText] = useState('');
    const [favourites, setFavourites] = useState<any>([]);

    //sorting names by alphabetical order using imported sorting function
    const sortedNames = babyNames.sort(sorting)

     //filters baby names in search bar to whatever is typed in
     const filteredBabyNames = sortedNames.filter((oneBabyName:babyNameInfo) => oneBabyName.name.toLowerCase().includes(searchText))

    //mapping list of each name in JSON database
    function arrOfNames():JSX.Element[]{
        const allNames = filteredBabyNames.map((eachName)=> 
        <button key={eachName.id} className={eachName.sex} value={eachName.name} 
        onClick = {handleClick}>
        {eachName.name}
        </button>)
        return allNames
    }

    const handleClick = ((e:any) => setFavourites([...favourites, e.target.value]))


    function handleSearchText(e:any){
        setSearchText(e.target.value.toLowerCase())
    }


    const favouritesArray = favourites.map((faveName:string) =>
    <button key={faveName}>
        {faveName}
    </button>
    )

    function handleZero(){
        if (filteredBabyNames.length === 0){
            return <p className="zero">Sorry! No names matching this search :(</p>
        }
    }

    return(
        <>
        <header>
            <h1>Baby Names</h1>
        </header>
        <main>
            <input 
            placeholder="search name ..." 
            value={searchText}
            onChange={handleSearchText}
            />  
        <div className="favourites">
            <p>List of Favourites:</p>
            {favouritesArray}
        </div>
        <hr/> 
        <div className="babyNames">
            {arrOfNames()}
            {handleZero()}
        </div>
        </main>

        </>

    )
}