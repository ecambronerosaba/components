import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        	<ApprovalCard>
        		<div>
        			<h4>Warning!</h4>
        			Are you sure you want to do this?
        		</div>
        	</ApprovalCard>
        	<ApprovalCard>
    		   <CommentDetail author={faker.name.firstName()} 
	        	avatar={faker.image.image()} 
	        	date="Today at 6:00PM" 
	        	content="Dinner was great!"
	        	/>
        	</ApprovalCard>
        	<ApprovalCard>
	        	<CommentDetail author={faker.name.firstName()} 
	        	avatar={faker.image.image()} 
	        	date="Yesteray at 4:30AM" 
	        	content="Dinner was fun!"
	        	/>
	        </ApprovalCard>
	        <ApprovalCard>
	        	<CommentDetail author={faker.name.firstName()} 
	        	avatar={faker.image.image()} 
	        	date="6/20 at 2:00PM" 
	        	content="Where should we go for dinner?"
	        	/>
	        </ApprovalCard>
    	</div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'));