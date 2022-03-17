import allBabyNames from "../babynames.json"

const babyNames:babyNameInfo[] = [...allBabyNames]

interface babyNameInfo {
    id: number;
    name:string;
    sex: string;
}

export default function arrOfnames():JSX.Element[]{
    const sortedNames = babyNames.sort(sorting)
    const allNames = sortedNames.map((eachName)=> <button key={eachName.id} className={eachName.sex}>{eachName.name}</button>)
    console.log(allNames)
    return allNames
}

function sorting (a:babyNameInfo, b:babyNameInfo){
    if(a.name < b.name){
        return -1
    }
    else if(a.name > b.name){
        return 1
    }return 0;
}




