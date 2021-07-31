import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import {social} from './data';
import{useGlobalContext} from '../context';
const NavBar = () => {
	const { closeNavbar, setShow,show,opensidebar} = useGlobalContext();
	return (
		<nav className='nav-center'>
		 
			 <div className='navbar'>
				<h2 style ={{marginLeft:'4rem'}} >users</h2>  
			 <button className='toggle-button' onClick= {()=>setShow(!show)} >{show? <FaTimes   onClick ={() => closeNavbar} /> :<FaBars />}</button>
			 <button className='sidebar-toggle' onClick = {opensidebar} ><FaBars/> </button>
			 </div>
			 <div className= {`${show? 'links-container show-container':'links-container'}`} >
			 
			 <ul className='links'>
			 <li>
			 
			 	<Link  to ='/'>Home </Link>
			  </li>
			  <li>
			 
			 	<Link  to ='/about'>About </Link>
			  </li>
			  <li>
			 
			 	<Link  to ='/contact'>contact </Link>

			  </li>
			  <li>
			 
			 	<Link  to ='/github'>github</Link>
			  </li>
			 </ul>
			 </div>
			 <ul className='social-icons'>
			 {
			 	social.map((item)=>{
			 		const {id,url,icon} = item;
			 		return <li key = {id} >
			 		<a href = {url}>{icon} </a>
			 		</li>
			 	})
			 }

			 </ul>
			 
		 

		</nav>

		)
}
export default NavBar;