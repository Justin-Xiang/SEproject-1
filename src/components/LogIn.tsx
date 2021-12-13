import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import '../css/login-3d.scss';
import '../css/Login-custom.scss';
import { User } from '../utils/user';
export const LogInput = (props: { user: User }) => {
	const [form] = Form.useForm();
	return (
		<div className="login">
			<Form
				form={form}
				onFinish={() => {
					const formValues = form.getFieldsValue();
					// 验证登录信息
					fetch('http://47.96.224.161:8080/login', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify(formValues),
						headers: {
							'Content-Type': 'application/json'
						}
					})
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							console.log(data);
							props.user.logIn(data);
						})
						.catch((err) => console.log(err));
				}}
			>
				<div className="login-container">
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!'
							}
						]}
					>
						<Input
							maxLength={100}
							placeholder="用户名"
							prefix={<UserOutlined />}
							size="large"
						/>
					</Form.Item>
					<p style={{ margin: '-7px 0', display: 'block' }}>&nbsp;</p>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!'
							}
						]}
					>
						<Input.Password
							maxLength={100}
							placeholder="密码"
							prefix={<LockOutlined />}
							size="large"
						/>
					</Form.Item>
				</div>
				<div className="submit">
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item
						style={{ justifyContent: 'center' }}
						wrapperCol={{ span: 16 }}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Button
								htmlType="submit"
								style={{ width: '80px', height: '40px' }}
								type="primary"
							>
								登录
							</Button>
						</div>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};
export const Register = (props: { user: User }) => {
	const [form] = Form.useForm();
	return (
		<div className="sign">
			<Form
				form={form}
				onFinish={() => {
					const formValues = form.getFieldsValue();
					// 验证登录信息
					fetch('http://47.96.224.161:8080/regist/', {
						method: 'POST',
						mode: 'cors',
						body: JSON.stringify(formValues),
						headers: new Headers({
							'Content-Type': 'application/json'
						})
					})
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							console.log(data);
						})
						.catch((err) => console.log(err));
				}}
			>
				<div className="sign-container">
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your email!'
							}
						]}
					>
						<Input
							maxLength={100}
							placeholder="邮箱"
							prefix={<UserOutlined />}
							size="large"
						/>
					</Form.Item>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!'
							}
						]}
					>
						<Input
							maxLength={100}
							placeholder="用户名"
							prefix={<UserOutlined />}
							size="large"
						/>
					</Form.Item>
					<p style={{ margin: '-7px 0', display: 'block' }}>&nbsp;</p>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!'
							}
						]}
					>
						<Input.Password
							maxLength={100}
							placeholder="密码"
							prefix={<LockOutlined />}
							size="large"
						/>
					</Form.Item>
				</div>
				<div className="submit">
					<Form.Item
						style={{ justifyContent: 'center' }}
						wrapperCol={{ span: 16 }}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Button
								htmlType="submit"
								style={{ width: '80px', height: '40px' }}
								type="primary"
							>
								注册
							</Button>
						</div>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};
export const LogIn = (props: { user: User }) => {
	return (
		<div className="box-3d">
			<div className="label-contain">
				<span className="log-labels" id="log-label">
					Log in
				</span>
				<span className="log-labels" id="sign-label">
					Sign up
				</span>
			</div>
			<input className="checkbox" id="log" type="checkbox"></input>
			<label className="checkbox-for" htmlFor="log">
				<span className="checkbox-for-icon">
					<i className="uil uil-arrow-up-left"></i>
				</span>
			</label>
			<div className="wrap-3d">
				<div className="wrapper-3d">
					<div className="wrap-3d-front">
						<div className="login out">
							<LogInput user={props.user} />
						</div>
					</div>
					<div className="wrap-3d-back">
						<div className="login out">
							<Register user={props.user} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
