export function clearCache() {

    localStorage.clear();
    sessionStorage.clear();

}

export function getDate(date:string) {

    let convertedDate = date.split('-').reverse().join('/');
    
    return convertedDate
    

}