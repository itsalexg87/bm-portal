import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TabsCard = ({ content }) => {
	// console.log(content);
	return (
		<div>
			{/* Start Tabs Area */}
			<div className='tabs-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<Tabs>
								<TabList className='tab-style--1'>
									{content.tabs.map(t => (
										<Tab>{t.name}</Tab>
									))}
								</TabList>

								{content.tabs.map(t => (
									<TabPanel>
										<div className='single-tab-content'>
											<p>{t.content}</p>
										</div>
									</TabPanel>
								))}
								<div className='mt--30'>
									<p>
										Jetzt{' '}
										<a href='/#suchen' style={{ color: '#F50057' }}>
											Spezialisten
										</a>{' '}
										finden
									</p>
								</div>
								{/* 
								<TabPanel>
									<div className='single-tab-content'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>

										<div className='mt--30'>
											<h4>Lorem ipsum dolor sit.</h4>
											<ul className='list-style--1'>
												{content.tabs.map(t => {
													return (
														<li key={t.name}>
															<FiCheck /> {t.name}
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</TabPanel>

								<TabPanel>
									<div className='single-tab-content'>
										<p>
											Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>
										<p>
											Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>
										<p>
											Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>
									</div>
								</TabPanel>

								<TabPanel>
									<div className='single-tab-content'>
										<p>
											Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>
										<p>
											Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>
										<p>
											Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim,
											vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt
											architecto officiis laudantium corporis voluptatem.
										</p>
									</div>
								</TabPanel> */}
							</Tabs>
						</div>
					</div>
				</div>
			</div>
			{/* End Tabs Area */}
		</div>
	);
};

export default TabsCard;
