import { Avatar, Carousel, Image, List } from 'antd';
import React from 'react';
import '../css/carousel-custom.scss';
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
					<h3 style={contentStyle}>Math</h3>
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

const Avater = () => {
	return (
		<div>
			<Avatar
				src={
					<Image
						src="https://joeschmoe.io/api/v1/random"
						style={{ width: 32 }}
					/>
				}
			/>
		</div>
	);
};

const Info = () => {
	const data = [
		{
			title: 'Ant Design Title 1'
		},
		{
			title: 'Ant Design Title 2'
		},
		{
			title: 'Ant Design Title 3'
		},
		{
			title: 'Ant Design Title 4'
		}
	];
	return (
		<div>
			<List
				dataSource={data}
				itemLayout="horizontal"
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
							avatar={
								<Avatar src="https://joeschmoe.io/api/v1/random" />
							}
							description="Ant Design, a design language for background applications, is refined by Ant UED Team"
							title={
								<a href="https://ant.design">{item.title}</a>
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export const IndexPage = () => {
	return (
		<>
			<Info />
		</>
	);
};
