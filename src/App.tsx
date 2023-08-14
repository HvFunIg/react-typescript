import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
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
	</div>
);
};

export default App;