import {links, social} from './sidebardata';
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from '../context';
const SideBar  = () => {
	const {closesidebar, isshowsidebar} =useGlobalContext();
	return (
		<main className= {`${isshowsidebar? 'side-bar show-sidebar':'side-bar'}`} >
 		<div className='sidebar-header'>
 		<h3 > users </h3>
 		<button className='close-btn' onClick = {closesidebar} ><FaTimes/> </button>
 		</div>
 		<ul className='nav-links'>
 		 
 		{
 			links.map((link)=>{
 				const {id, url ,text, icon} = link;
 				return <li key = {id} >
 				<Link to ={url}>{icon}{text}</Link>
 				</li> 
 			})
 		}
 		 
 		</ul>
 		<ul className='sidebar-social'>
 		{
 			social.map((sociallink)=>{
 				const {id, url,icon} = sociallink;
 				return <li key ={id} >
 				<a href ={url}>{icon} </a>
 				</li>
 			})
 		}
 		</ul>
 		
			
		</main>

		)
}
export default SideBar ;