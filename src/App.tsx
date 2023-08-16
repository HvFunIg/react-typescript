import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {BrowserRouter,Link,Routes,Route, useNavigate} from 'react-router-dom'
import { ITodo, IUser } from './types/types';

import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
return (
	<BrowserRouter>
		<div>
			<Link to="/users">Пользователи</Link>
			<Link to="/todos"> Список дел</Link>
		</div>
		<Routes>
			{/* <EventsExample/>
			<Card 
			onClick={(num)=>alert("click!" + num)}
			width='500px ' 
			height='300px' 
				variant={CardVariant.primary}
				>
				<button>B!</button>
			</Card> */}
			<Route path={'/users'} element={<UserPage/> }></Route>
			<Route path={'/user/:id'} element={<UserItemPage/> }></Route>
			<Route path={'/todos'} element={<TodosPage/> }></Route>
			<Route path={'/todo/:id'} element={<TodoItemPage/> }></Route>
		</Routes>
	</BrowserRouter>
		
);
};

export default App;