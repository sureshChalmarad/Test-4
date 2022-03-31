import ArrowLeft from './Imgs/ArrowLeft.png'
import ArrowRight from './Imgs/ArrowRight.png'
import Hoodie from './Imgs/image 27.png'
import VNeck from './Imgs/image 28.png'
import SSleeve from './Imgs/image 29.png'
import FSleeve from './Imgs/image 30.png'


const Description = () => {
    
    return ( 

        <div className="DesRec">
        <div className="Description">
        <h2>Description</h2> <br />
        <p>The Women Solid Color Waterfall Neck Knitted Cardigan is made out of soft knit fabric. This cardigan features a waterfall neck and solid color. A perfect optionfor your casual occasion. Take a look at our store "Nlife LLC", you will find more what you want!Note: Please refer to our size image chart before order. That’s
        the size for this item. 
        </p> <br />
        <li> Lightweight knit blended fabric, nice wear resistance and wrinkle resistance, last longer without pilling. </li> 
        <li> Waterfall neck, long sleeve, solid color, open front, casual style for everyday comfort. </li>
        <li> Fits for daily wear, school, vacation, work. Easy to pair with jeans, skinny leggings, boots in spring, autumn fall and winter.</li>
        </div>

<div className="Recommended">
    <h2>Recommended Products</h2>
    <br />

    <div className="Products">
    <img src={ArrowLeft} alt="" />
 <div className="Hoodie">
<img src={Hoodie} alt="" />
<h3>Hoodie Sweatshirt</h3>
<h2>$31.10</h2>
<button>Shop Now</button>
</div>

<div className="Hoodie">
<img src={VNeck} alt="" />
<h3>V Neck Top</h3>
<h2>$29.20</h2>
<button>Shop Now</button>
</div>

<div className="Hoodie">
<img src={SSleeve} alt="" />
<h3>Short Sleeve</h3>
<h2>$29.20</h2>
<button>Shop Now</button>
</div>

<div className="Hoodie">
<img src={FSleeve} alt="" />
<h3>Full Sleeve Sweater</h3>
<h2>$29.20</h2>
<button>Shop Now</button>
</div>

<img src={ArrowRight} alt="" />

    </div>
   

    
</div>



        </div>
       
      


     );
}
 
export default Description;