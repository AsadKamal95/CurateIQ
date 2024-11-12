import "./navbar.css"

const Navbar = () => {
    return ( <>
        <div className="navbar-container">
            <div className="navbar-container-left">
                <p>CurateIQ</p>
            </div>
            <div className="navbar-container-right">
                
                   <button>Sign in</button>
                   <button>Sign up</button>
                
            </div>
            
        </div>
        <hr />
    </> );
}
 
export default Navbar;