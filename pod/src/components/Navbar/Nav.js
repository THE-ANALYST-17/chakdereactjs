import { FaUser,FaCartPlus } from 'react-icons/fa';

import './nav.css'
const Nav=(props)=>{
    return(
        <>
        <div className="main">
            <div className='nav'>
        <h3 className="logo">POD</h3>
        <form className="srch">
            <input placeholder="Search">
            {/* <FaSearch/> */}
            </input>
        </form>
        
        <FaUser  className='usericon'/>
        <FaCartPlus className='cart' onClick={props.updateCart}/>
        <p class='p'>{props.st}</p>
        
        </div>
        </div>
        {/* <p>{props.st}</p> */}
        </>
    )
}
export default Nav