import { Carousel } from 'antd';
import { useRef } from 'react';
import '../css/slick-custom.scss';
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
				autoplay={true}
				autoplaySpeed={2000}
				dots={true}
				dotPosition={'bottom'}
				arrows={true}
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
	const node = useRef(null);
	return <CustomCarousel />;
};
