import {useGlobalContext} from '../context'
import SingleProject from './singleproject'
import {project} from './githubdata';
import Loading from '../loading';
import {useEffect} from 'react';
const Github = () => {
	const {closeNavbar,setLoading,loading} = useGlobalContext();
	useEffect(()=>{
		setLoading(true)
		setTimeout(()=>{
			setLoading(false)

		},1000)
	},[setLoading])
	if(loading){
		return <Loading/>
	}

	return (
		<section onClick = {closeNavbar} className='section'>
		<div className='title'>
		<h3> Github Project </h3>
		</div>
		<div className='project-center'>
		{
			project.map((projects)=>{
				return <SingleProject key ={projects.id}{...projects} />
			})
		}
		</div> 
		</section>

		)
}
export default Github;