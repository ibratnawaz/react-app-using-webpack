import React from 'react';
import './App.css';

const App = () => {
	return (
		<>
			<nav>
				<div className='menu'>
					<div className='logo'>
						<a href='#'>CodingLab</a>
					</div>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
						<li>
							<a href='#'>Feedback</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='img'></div>
			<div className='center'>
				<div className='title'><Hello name='John'/></div>
				<div className='sub_title'><Greeting time='afternoon'/></div>
				<div className='btns'>
					<button>Learn More</button>
					<button>Subscribe</button>
				</div>
			</div>
		</>
	);
};

function Hello(props) {
	if (props.name == '') throw new Error('Please provide a name');
	return <h1>Hello {props.name}</h1>;
}

function Greeting(props) {
	return <h2>Good {props.time}</h2>;
}

export default App;
