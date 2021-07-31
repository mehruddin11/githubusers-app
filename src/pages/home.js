import Users from '../components/users';
import {useGlobalContext} from '../context'
const Home = () => {
		const {closeNavbar} = useGlobalContext();
		return (
		<section onClick = {closeNavbar}>
		 
		<Users/>
	 

		</section>

		)
}
export default Home;