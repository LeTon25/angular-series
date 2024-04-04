export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const pro  = new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn)
                },800)
            }
        )
        return pro;
    }
    logIn(){
        this.loggedIn = true;
    }
    logOut(){
        this.loggedIn = false;
    }
}