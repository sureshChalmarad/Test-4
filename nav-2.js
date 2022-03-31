import Arrow from './Imgs/right-arrow.png' 

const Nav2  = () => {
    return ( 
        <div className="nav2">
            <ul>
                <li>Home <img src={Arrow} alt="" /></li> 
                <li>Category <img src={Arrow} alt="" /> </li> 
                <li>Sub-Category <img src={Arrow} alt="" /></li> 
                <li>Product <img src={Arrow} alt="" /></li> 
            </ul>
        </div>
     );
}
 
export default Nav2;

