import { Button, DatePicker, Form, Input, message  } from "antd";
import moment from 'moment'
import fetch from '../../utils/fetch'

const postData = async (data: any) => {
	return await fetch(`/v1/solid`, data, 'POST')
}

export default function Home() {
	const onFinish = async (values: any) => {
		values.date  = moment(values.date).format('YYYY-MM-DD')
		const data = await postData(values)
		if (data.code === 200) {
			message.success(data.message)
		}	else {
			message.error(data.message)
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form name="form"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>

			<Form.Item rules={[{required: true}]} label="选择日期" name="date">
				<DatePicker />
			</Form.Item>
			<Form.Item rules={[{required: true}]} label="微信名" name="wechatName">
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button className="text-blue-600" type="primary" htmlType="submit">
					提交
				</Button>
			</Form.Item>
		</Form>
	)
}
