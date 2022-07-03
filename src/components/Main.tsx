import allBabyNames from "../babynames.json";
import sorting from "./reorderNames";
import { babyNameInfo } from "./reorderNames";
import { useState } from "react";

export default function Main(): JSX.Element {
  const babyNames: babyNameInfo[] = [...allBabyNames];

  const [searchText, setSearchText] = useState("");
  const [favourites, setFavourites] = useState<babyNameInfo[]>([]);

  //sorting names by alphabetical order using imported sorting function
  const sortedNames = babyNames.sort(sorting);

  //filters baby names in search bar to whatever is typed in
  const filteredBabyNames = sortedNames.filter((oneBabyName: babyNameInfo) =>
    oneBabyName.name.toLowerCase().includes(searchText)
  );

  function handleFavouritesClick(eachName:babyNameInfo){
    if (isInList(eachName)) {
      console.log('name already in list')
    } else {
      setFavourites([...favourites, eachName]) 
    }
  }

  function handleRemoveFavourite(eachName:babyNameInfo){
    const newList: babyNameInfo[] = favourites.filter((babyname) => babyname !== eachName)
    setFavourites(newList)
  }


  
  function isInList(name:babyNameInfo){
    return favourites.find((el) => el.id === name.id) !== undefined;
  }
  //mapping list of each name in JSON database
  function arrOfNames(): JSX.Element[] {
    const allNames = filteredBabyNames.map((eachName) => (
      <button
        key={eachName.id}
        className={`${eachName.sex} eachname` }
        value={eachName.name}
        onClick={() => handleFavouritesClick(eachName)}
      >
        {eachName.name}
      </button>
    ));
    return allNames;
  }



  const favouritesArray = favourites.map((faveName: babyNameInfo) => (
    <button key={faveName.id} className={faveName.sex} onClick={()=> handleRemoveFavourite(faveName)}>
      {faveName.name}
    </button>
  ));



  //prints message when there are no names matching the search
  function handleZero() {
    if (filteredBabyNames.length === 0) {
      return <p className="zero">Sorry! No names matching this search :(</p>;
    }
  }

  return (
    <>
      <header>
        <h1>Baby Names App</h1>
      </header>
      <main>
        <input
          placeholder="search name ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />
        <div>
          <p className="names-length">
            {" "}
            Showing {filteredBabyNames.length} names out of {sortedNames.length}
          </p>
        </div>
        <div className="favourites">
          <p>List of Favourites:</p>
          {favouritesArray}
        </div>
        <hr />
        <div className="babyNames">
          {arrOfNames()}
          {handleZero()}
          {console.log(favourites)}
        </div>
      </main>
    </>
  );
}
