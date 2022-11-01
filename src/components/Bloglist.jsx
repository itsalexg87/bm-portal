import React, { Component, Fragment } from 'react';
// import BlogContent from './BlogContent';
import { blog } from '../data/blog';

class BLogList extends Component {
	render() {
		// const PostList = BlogContent.slice(0, 6);
		return (
			<>
				<div className='row'>
					{blog.map(b => (
						<div className='col-lg-4 col-md-6 col-sm-6 col-12' key={b.id}>
							<div className='blog blog-style--1'>
								<div className='thumbnail'>
									<a href={`/blog/${b.id}`}>
										<img className='w-100' src={b.image} alt='Blog Images' />
									</a>
								</div>
								<div className='content'>
									<p className='blogtype'>{b.kategorie}</p>
									<h4 className='title'>
										<a href={`/blog/${b.id}`}>{b.title}</a>
									</h4>
									<div className='blog-btn'>
										<a className='rn-btn text-white' href={`/blog/${b.id}`}>
											Mehr erfahren
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</>
		);
	}
}
export default BLogList;
