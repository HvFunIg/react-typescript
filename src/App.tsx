import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
	const users: IUser[] = [
		{id:1, name:'Igor', email:'test@mail.test', address:{city:"Moscow", street:"1 Street", zipcode:"11"}},
		{id:2, name:'Igor', email:'test@mail.test', address:{city:"Moscow", street:"1 Street", zipcode:"11"}}
	]
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