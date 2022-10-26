import fetch from "../../utils/fetch"
import {Table} from 'antd'
import { useEffect, useState } from 'react';

const getData = async () => {
	return await fetch(`/v1/solid`, {}, 'GET')
}

export default function TablePage() {
	const [data, setData] = useState([])
	const columns = [
		{
			title: '日期',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: '微信名',
			dataIndex: 'wechatName',
			key: 'wechatName',
		},
	]
	useEffect(() => {
		const getTableData = async () => {
			const data = await getData()
			setData(data.list)
		}
		getTableData()
	}, [])
	return <Table dataSource={data} columns={columns} />
}
