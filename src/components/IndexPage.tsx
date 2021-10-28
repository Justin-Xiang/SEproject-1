import { Carousel } from 'antd';
import React from 'react';
import '../css/custom-custom.scss';
const contentStyle: React.CSSProperties = {
	color: '#fff',
	lineHeight: '160px',
	background: '#364d79',
	textAlign: 'center',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const CustomCarousel = () => {
	return (
		<div className="wrapper">
			<Carousel
				arrows
				autoplay
				autoplaySpeed={2000}
				dotPosition={'bottom'}
				dots
			>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
		</div>
	);
};
export const IndexPage = () => {
	return <CustomCarousel />;
};
