import {useGlobalContext} from '../context'
import {social} from './sidebardata'
import Loading from '../loading';
import {Online, Offline} from 'react-detect-offline'

const Users= () => {
	const {users, loading, closeNavbar} = useGlobalContext();
	if(loading){
		return <Loading/>
	}
	return (
		<main onClick = {closeNavbar} >
		<Online>
		<h1 className='github-text'> GitHub Api Data </h1>
		
		<ul className='users'>
		{
			users.map((user)=>{
				const {login, id ,avatar_url, html_url} = user;
				return <li key ={id} >
				<img src={avatar_url} alt = {login}/>
				<div>
				<h4> {login} </h4>
				<a href ={html_url}>Profile </a>
				</div>
				</li>
			})
		}
		
		</ul>
		<footer>
		<div  className='developer'>
		<h4> Developer Mehruddin </h4>
		</div>
		{
			social.map((socials)=>{
				const {id, url, icon} = socials;
				return <section key ={id} >
				<a href = {url}>{icon} </a>
				</section>
			})

		}
		 
		 
		</footer>
		</Online>
		 
		<Offline  > <h4 className='offline'> Youre offline Right Now!! </h4></Offline>
		 
		</main>

		)
}
export default Users;