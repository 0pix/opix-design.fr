import React, {useEffect} from 'react';


const About = () => {

	useEffect(() => {
		document.title = "OD | About"
	}, [])
	return (
		<div>
			About
		</div>
	);
};

export default About;
