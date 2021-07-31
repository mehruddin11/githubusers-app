import {Link} from 'react-router-dom'
const ErrorPage = () => {
	return (
		<section className='section title'>
		<h1> Opps Error Ocuured!! </h1>
		<Link to ='/'>
		<button className='btn btn-primary'>Back home </button></Link>
		
		</section>

		)
}
export default ErrorPage;