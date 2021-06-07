export function SignIn(){
    return(
        <div>
            <div>
                <label>Username:</label>
                <input type="text" name="username"></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password"></input>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
    );
}
