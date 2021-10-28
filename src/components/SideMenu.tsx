/* eslint-disable no-undef */
import React, { useContext, useRef, useState } from 'react';
import '../css/Menu.scss';
const SelectedContext = React.createContext({} as any);
type Child = JSX.Element | string;
type MenuChild = JSX.Element;
export const MyMenu = (props: { children: Child[] }) => {
	const [selected, setSelected] = useState(-1);
	return (
		<SelectedContext.Provider value={[selected, setSelected]}>
			<div>
				<ul className="menu">{props.children}</ul>
			</div>
		</SelectedContext.Provider>
	);
};
export const MenuItem = (props: {
	children: Child;
	key: number;
	icon?: JSX.Element;
	href?: string;
	isChild?: boolean;
}) => {
	const [selected, setSelected] = useContext(SelectedContext);
	const id = useRef(Math.random());
	return (
		<li
			className={
				'menu-item' +
				(id === selected ? ' menu-item-selected' : '') +
				(props.isChild ? ' menu-item-child' : '')
			}
			onClick={() => {
				setSelected(id);
				console.log(props.isChild);
			}}
		>
			{props.icon ? (
				<span className="menu-item-icon">{props.icon}</span>
			) : null}
			<a href={props.href}>
				<span className="menu-item-title">{props.children}</span>
			</a>
		</li>
	);
};
export const SubMenu = (props: {
	children: MenuChild[] | MenuChild;
	key: number;
	title: string;
	icon?: JSX.Element;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<li className="menu-submenu-item">
			<div
				className="menu-submenu-item-title"
				onClick={() => {
					setIsOpen((v) => !v);
				}}
			>
				{props.icon ? <span>{props.icon}</span> : null}
				<span className="menu-item-title">{props.title}</span>
				<i className="menu-submenu-item-arrow"></i>
			</div>
			<ul
				className="menu-submenu"
				style={{ display: isOpen ? 'block' : 'none' }}
			>
				{Array.isArray(props.children)
					? props.children.map((v) =>
							React.cloneElement(v, { isChild: true })
					  )
					: React.cloneElement(props.children, { isChild: true })}
			</ul>
		</li>
	);
};
