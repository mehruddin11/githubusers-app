import React,{useContext, useEffect, useCallback, useState} from 'react';
const url = 'https://api.github.com/users';

const AppContext = React.createContext();

const AppProvider = ({children})=>{
	const [show, setShow] = useState(false)
	const [loading ,setLoading] =useState(true)
	const [isshowsidebar , setShowsidebar] =useState(false);
	const [users, setUsers] =useState([])
	const closeNavbar = () =>{
		setShow(false)
	}
	const opensidebar = () => {
		setShowsidebar(true);
	}
	const closesidebar = () => {
		setShowsidebar(false)
	}

	const getusers =   useCallback(async() =>{
		setLoading(true)
		 	try{
		 		const response = await fetch(url);

		 		const data = await response.json();

		 		setUsers(data)
		 		setLoading(false)
		 	}catch(err){
		 		console.log(err);
		 		setLoading(false)
		 	}
		 },[]);
		 useEffect(()=>{
		 	getusers()
		 },[getusers])
	
	 
	
	return<AppContext.Provider value = {
		{setShow,
			show,
		 closeNavbar,
		 opensidebar ,
		 closesidebar,
		 isshowsidebar,
		 users,
		 loading,
		 setLoading
		  
		}
		} >
	{children}
	</AppContext.Provider>
};

const useGlobalContext = () => {
	return useContext(AppContext)
}
export {AppProvider, AppContext, useGlobalContext}