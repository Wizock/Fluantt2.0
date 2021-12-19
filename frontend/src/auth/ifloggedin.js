export default function ifloggedin(){
    if (sessionStorage.getItem('token') !== undefined && sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== ""){
        return true
    }
    return false;
}

