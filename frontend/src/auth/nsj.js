import isloggedin from './ifloggedin'


function Check(){

    return(
    <div>+feafw
        {isloggedin()? ("you are logged in"+sessionStorage.getItem('token')) : ("you arent logged in") }
    </div>
    )
}

export default Check