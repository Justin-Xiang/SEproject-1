/* eslint-disable no-undef */
import React, { useContext, useEffect, useRef, useState } from 'react';
import '../css/Menu.scss';
import { level } from '../utils/store';
import { difficulty } from '../utils/types';
const SelectedContext = React.createContext({} as any);
type Child = JSX.Element | string;
type MenuChild = JSX.Element;
export const Menu = (props: { children: Child[] }) => {
	const [selected, setSelected] = useState(-1);
	return (
		<SelectedContext.Provider value={[selected, setSelected]}>
			<div className="contain-menu">
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
	level?: difficulty;
	default?: boolean;
	isChild?: boolean;
}) => {
	const [selected, setSelected] = useContext(SelectedContext);
	const id = useRef(Math.random());
	useEffect(() => {
		if (props.default) {
			setSelected(id.current);
		}
	}, []);
	return (
		<li
			className={
				'menu-item' +
				(id.current === selected ? ' menu-item-selected' : '') +
				(props.isChild ? ' menu-item-child' : '')
			}
			onClick={() => {
				setSelected(id.current);
				if (props.level) {
					level.setLevel(props.level);
				}
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
				<i
					className={
						'menu-submenu-item-arrow' +
						(isOpen ? ' menu-submenu-item-arrow-open' : '')
					}
				></i>
			</div>
			<ul
				className={
					'menu-submenu' + (isOpen ? ' menu-submenu-open' : '')
				}
				style={{
					maxHeight: isOpen ? '600px' : 0,
					overflow: isOpen ? 'initial' : 'hidden'
				}}
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
