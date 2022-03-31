import side1 from './Imgs/dfg.png'
import side2 from './Imgs/q232.png'
import side3 from './Imgs/u766.png'
import side4 from './Imgs/dfg.png'
import main from './Imgs/image 38.png'
import star from './Imgs/Path 119.png'
import star2 from './Imgs/Vector.png'
import green from './Imgs/green.png'
import red from './Imgs/red.png'
import blue from './Imgs/blue.png'
import black from './Imgs/black.png'
import grey from './Imgs/grey.png'
import Fstar from './Imgs/Fstar.png'
import Estar from './Imgs/Estar.png'
import Cart from './Imgs/Cart.png'
import Transport from './Imgs/Path 108.png'


const Home = () => {
    return ( 
        <div className="head">

<div className="Leftimg">
            <div className="box">
            <img src={side1} alt="" />
            </div>
            
            <div className="box">
            <img src={side2} alt="" />
            </div>

            <div className="box">
            <img src={side3} alt="" />
            </div>

            <div className="box">
            <img src={side4} alt="" />
            </div>
        </div>
       
       <div className="Mainimg">
       <div className="box">
            <img src={main} alt="" />
            </div>
       </div>

       <div className="details">
           <h2>Waterfall Knitted Cardigan</h2>
           <img src={star} alt="" />
           <img src={star} alt="" />
           <img src={star} alt="" />
           <img src={star2} alt="" />
           <img src={star2} alt="" /> <br /> <br />
           <h1>$64.99</h1>
           <h4>Free Shipping</h4> 
           <hr /> <br />
           <h2>Select Size</h2>
           <button>S</button>
           <button>M</button>
           <button>L</button> <br /> <br />
           <h2>Select Color</h2> 

           <div className="selectColor">
           <img src={green} alt="" />
           <img src={red} alt="" />
           <img src={blue} alt="" />
           <img src={black} alt="" />
           <img src={grey} alt="" />
           </div>
           <hr /> <br />

<div className="QuantityZip">
<div className="QZ">
               <h3>Quantity</h3>
               <button> - 1 + </button>  <br /> <br /> <br />
               <button id="AC">Add to Cart</button> 
           </div>

           <div className="QZinputs">
               <h3>Zipcode:</h3>
               <button id="zip">90125</button> <br />
               <a href="">Check Availability</a> <br /> <br />
               <button id="Buy">BUY Now</button>
</div>
           
               <br/>
               
           </div>
           

<div className="AddButtons">
    <br />
    <hr/>
    <br />
        <span>Sold By </span> <a href="">Seller One</a> <br /> <br />
        <span> Seller Rating </span> <img src={Fstar} alt="" /> 
        <img src={Fstar} alt="" /> 
        <img src={Fstar} alt="" /> 
        <img src={Fstar} alt="" /> 
        <img src={Estar} alt="" />  <span>4/5</span> <br />
        <br />
        <a href="">Seller Information</a>
</div>

       </div>
       {/* <div className="star2">
       <img  src={star3} alt="" />
       </div> */}

        <div className="rightside">
            <div className="box"> <br /> 
                <span id="Seller">More Sellers</span> <br /> <br />
                <hr />
                <div className="cart1">
                    <div className="cartContent">
                    <span>$67.00</span> <br />
                    <a href="">Seller Two</a> <br />
                    <span>Free Shipping (Standard)</span> <br />
                    </div>
                    <div className="cartimg">
                        <img src={Cart} alt="" width="40px" />
                    </div>
                    </div>

<br />

                <div className="cart2">

                <div className="cartContent2">
                <span>$67.00</span> <br />
               <a href="">Seller Two</a> <br />
               <span>Shipping $5.99 (Express)</span>
                </div>

                <div className="cartimg">
                        <img src={Cart} alt="" width="40px" />
                    </div>
                </div> <br /> <b></b>
                <hr /> 
                <a id="boxlink" text-content="center"  href="">Other Offers Starting at $91.00</a>
                
            </div>

<div className="Transport">
<img src={Transport} alt="" />    <span id="Ship">Shipping Options:</span> <br /> <br />
<span>Before Oct 14 - <span id="Price">$5.99</span>  <span> <a id="ELink" href="">Select Express</a></span></span> <br />
<span>After Oct 14 - Free (Standard Shipping) </span>

</div>
            
         </div>  
            
            
            
        </div>
     );
}
 
export default Home;