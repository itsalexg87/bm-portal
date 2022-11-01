import React, { Component } from 'react';
import { FiCast, FiLayers, FiUsers, FiMonitor } from 'react-icons/fi';

const ServiceList = [
	{
		icon: <FiCast />,
		title: 'Vergleichbarkeit',
		description: '',
	},
	{
		icon: <FiLayers />,
		title: 'Transparenz',
		description: '',
	},
	{
		icon: <FiUsers />,
		title: 'Qualität',
		description: '',
	},
	{
		icon: <FiMonitor />,
		title: 'Auswahl',
		description: '',
	},
	{
		icon: <FiUsers />,
		title: 'Direkter Kontakt',
		description: '',
		// 'Du kontaktierst direkt die Klinik und hast direkt einen kompetenten Ansprechpartner an der Hand.',
	},
	{
		icon: <FiMonitor />,
		title: 'Keine vesteckten Kosten',
		description: '',
		// 'Wir verlangen kein Geld von dir. Du vereinbarst die Kosten direkt mit der Klinik.',
	},
];

class ServiceThree extends Component {
	render() {
		const { column } = this.props;
		const ServiceContent = ServiceList.slice(0, this.props.item);

		return (
			<React.Fragment>
				<div className='row' style={{ marginBottom: '15px' }}>
					{ServiceContent.map((val, i) => (
						<div className={`${column}`} key={i}>
							<div className='service service__style--2'>
								<div className='icon'>{val.icon}</div>
								<div className='content'>
									<h3 className='title'>{val.title}</h3>
									<p>{val.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}
export default ServiceThree;
