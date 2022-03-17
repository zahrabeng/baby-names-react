
export interface babyNameInfo {
    id: number;
    name:string;
    sex: string;
}


// comparing two names and ordering them based on alphabetical value
export default function sorting (a:babyNameInfo, b:babyNameInfo):number{
    if(a.name < b.name){
        return -1
    }
    else if(a.name > b.name){
        return 1
    }return 0;
}




