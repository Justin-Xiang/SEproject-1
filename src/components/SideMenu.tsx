import {
	AntDesignOutlined,
	FunctionOutlined,
	HomeOutlined,
	ReadOutlined,
	SecurityScanOutlined
} from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import styles from '../css/SideMenu.module.scss';
export const Menus = () => {
	return (
		<Menu
			selectable={true}
			style={{
				width: '100%',
				height: '80%',
				bottom: '0px',
				display: 'flex',
				flexDirection: 'column',
				flex: 1
			}}
			mode="inline"
			theme="light"
			defaultSelectedKeys={['default']}
		>
			<Menu.Item icon={<HomeOutlined />} key={'default'}>
				<a href="#/">首页</a>
			</Menu.Item>
			<Menu.SubMenu key={10} title="题库" icon={<FunctionOutlined />}>
				<Menu.Item key={1}>
					<a href="#/gradeOne">一年级</a>
				</Menu.Item>
				<Menu.Item key={2}>二年级</Menu.Item>
				<Menu.Item key={3}>三年级</Menu.Item>
				<Menu.Item key={4}>四年级</Menu.Item>
				<Menu.Item key={5}>五年级</Menu.Item>
				<Menu.Item key={6}>六年级</Menu.Item>
			</Menu.SubMenu>
			<Menu.Item key={20} icon={<SecurityScanOutlined />}>
				错题集
			</Menu.Item>
			<Menu.Item key={30} icon={<ReadOutlined />}>
				生涯记录
			</Menu.Item>
		</Menu>
	);
};

export const SideMenu = () => {
	return (
		<div>
			<div className={styles.menuContainer}>
				<div className={styles.avatarContainer}>
					<div className={'avatar'}>
						<Avatar size={50} icon={<AntDesignOutlined />} />
					</div>
				</div>
				<Menus />
			</div>
		</div>
	);
};
