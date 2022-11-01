import React from 'react';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi';

const BreadcrumbBlog = ({ blogArtikel }) => {
	return (
		<div className='breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--2' data-black-overlay='3'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='blog-single-page-title text-center pt--100'>
							<h2 className='title' style={{ color: '#f50057' }}>
								{blogArtikel.title}
							</h2>
							<ul className='blog-meta d-flex justify-content-center align-items-center'>
								<li>
									<FiClock style={{ color: '#F50057' }} />
									{blogArtikel.datum}
								</li>
								<li>
									<FiUser style={{ color: '#F50057' }} />
									{blogArtikel.author}
								</li>
								{/* <li>
											<FiMessageCircle />
											15 Comments
										</li>
										<li>
											<FiHeart />
											Like
										</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadcrumbBlog;
