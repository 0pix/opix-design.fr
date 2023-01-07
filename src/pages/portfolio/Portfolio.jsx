import React, {useEffect} from 'react';

const Portfolio = () => {
	useEffect(() => {
		document.title = "OD | Portfolio"
	}, [])

	return (
		<div>
			Portfolio
		</div>
	);
};

export default Portfolio;
