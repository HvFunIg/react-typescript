import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios'
const App = () => {

	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(()=>{
		fetchUsers();
	},[])

	async function fetchUsers(){
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (error) {
			alert(error)
		}
	}
return (
	<div>
		<Card 
			onClick={(num)=>alert("click!" + num)}
			width='500px' 
			height='300px' 
			variant={CardVariant.primary}
		>
			<button>B!</button>
		</Card>
		<UserList users={users}/>
	</div>
);
};

export default App;