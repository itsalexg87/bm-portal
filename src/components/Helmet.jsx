import React from 'react';

//dep
import { Helmet } from 'react-helmet';

const PageHelmet = ({ pageTitle, pageDescription }) => {
	return (
		<Helmet>
			<title>{pageTitle} || Beautify Myself</title>
			<meta name='description' content={pageDescription} />
		</Helmet>
	);
};

export default PageHelmet;
