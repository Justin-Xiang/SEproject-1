import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from '../css/Login.module.css';
import { User } from '../utils/user';
export const LogIn = (props: { user: User }) => {
	return (
		<div className={styles.loginContainer}>
			<Form
				onFinish={() => {
					props.user.init();
					// fetch('http://localhost:8081/?i=1', {
					// 	method: 'POST',
					// 	body: 'try=0'
					// });
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
							size="large"
							placeholder="用户名"
							prefix={<UserOutlined />}
							maxLength={100}
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
							size="large"
							placeholder="密码"
							prefix={<LockOutlined />}
							maxLength={100}
						/>
					</Form.Item>
				</div>
				<div className={styles.submit}>
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item
						wrapperCol={{ span: 16 }}
						style={{ justifyContent: 'center' }}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Button
								type="primary"
								htmlType="submit"
								style={{ width: '80px', height: '40px' }}
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
