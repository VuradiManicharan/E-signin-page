import "./Section.css"

const Section =()=>{
    return(
        <div className="section">
        <div className="section-container">                   
                    <h1>Sign-in</h1>

                    <form>
                    <h5>E-mail</h5>                   
                    <input  type="text" name="email" id="email"></input>
                    <h5>Password</h5>                   
                    <input  type="text" name="password" id="password"></input>
                    
                    <button type="submit"  className="section-signInButton">Sign In</button>
                
                    </form>

                    <p>By signing-in you agree to the eShop Website conditions of Use & Sale. Privacy Notice, our cookies Notice and our interest-Based Ads Notice.</p>

                    <button type="submit" className="section-registerButton">Create your Eshop Account</button>
                    
                    </div>
        </div>
    )
}

export default Section;