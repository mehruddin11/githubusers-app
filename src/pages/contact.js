import {useEffect} from 'react';
import {useGlobalContext} from '../context'
import Loading from '../loading';
const Contact = () => {
	const {closeNavbar,loading,setLoading} = useGlobalContext();

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
		<section onClick ={closeNavbar} >
		<div className='container'>
		<h1>Comming Soon ... </h1>

		</div>

		</section>

		)
}
export default Contact;