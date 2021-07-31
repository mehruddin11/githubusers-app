import Question from './questtion';
import SingleQuestion from './singlequestion';
import {useGlobalContext} from '../context';
import {Link} from 'react-router-dom';
import Loading from '../loading';
import React, { useEffect } from 'react';
const About = () => {
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
		<main onClick ={closeNavbar}  >
		<div className='container'>
		<h3> About Api And Developer </h3>
		<section className='info'>
		{
			Question.map((item)=>{
				
				return <article>
				<SingleQuestion key= {item.id} {...item} />
				
				</article>
			})
		}
		</section>
		<div>
		<Link to ='/'>
		<button className='about-btn-home' >back home </button>
		</Link>
		</div>
		</div>
		

		 
		</main>

		)
}
export default About;