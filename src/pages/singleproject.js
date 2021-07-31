const SingleProject = ({name,url, icon}) => {
	const data =  (icon &&icon)
	const link = url && url
	return <section className='projects'>
	<div>
	<img src={data ||<h4>image not there</h4>} alt ={name} />
	</div>
	<div className='project-footer'>
	<h4> {name} </h4>
	<button className='btn btn-primary'><a href ={link|| 'no url'}> Detail</a> </button>
	</div>
	 </section>

}
export default SingleProject;