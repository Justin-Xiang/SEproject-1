import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Carousel } from 'antd';
import React from 'react';
import '../css/carousel-custom.scss';
import testImage from '../image/IMG.jpg';
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
					<img alt="img" src={testImage} />
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

const Info = () => {
	return (
		<div>
			<Avatar
				alt="Remy Sharp"
				className="MuiAvatar-img"
				src={testImage}
				sx={{ width: 100, height: 100 }}
			/>
			<div className="info">
				<Box
					sx={{
						width: '150%',
						maxWidth: 400,
						bgcolor: 'background.paper'
					}}
				>
					<nav aria-label="main mailbox folders">
						<List>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<InboxIcon />
									</ListItemIcon>
									<ListItemText primary="用户名" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<DraftsIcon />
									</ListItemIcon>
									<ListItemText primary="邮箱" />
								</ListItemButton>
							</ListItem>
						</List>
					</nav>
					<Divider />
				</Box>
			</div>
		</div>
	);
};

export const IndexPage = () => {
	return (
		<>
			<CustomCarousel />
			<Info />
		</>
	);
};
