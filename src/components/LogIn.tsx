import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from '../css/Login.module.css';
import { User } from '../utils/user';
export const LogIn = (props: { user: User }) => {
	const [form] = Form.useForm();
	return (
		<div className={styles.loginContainer}>
			<Form
				form={form}
				onFinish={() => {
					const formValues = form.getFieldsValue();
					console.log(formValues);
					// 验证登录信息
					fetch('http://localhost:8000/login', {
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
							if (data.status) {
								props.user.init();
							} else {
								alert('账号密码错误');
							}
						})
						.catch((err) => console.log(err));
				}}
			>
				<div className={styles.login}>
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
					<p style={{ margin: '6px 0', display: 'block' }}>&nbsp;</p>
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
				<div className={styles.submit}>
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
