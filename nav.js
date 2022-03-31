import Logo from "./Imgs/Logo.png"
import User from "./Imgs/user.png"
import Cart from "./Imgs/shopping-cart.png"

const Nav = () => {
    return (
<div className="nav" >
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="search">
                <input type="text"/>
                <button></button>
                
            </div>


            <div className="navlinks">
                <ul>
                <li id="a2"><a href=""> <img src={User} alt="" /></a>   </li>
                <li id="a2"><a href=""> <img src={Cart} alt="" /></a>   </li>
                </ul>
            </div>

        </div>

       


      );
}
 
export default Nav;