import { Row, Col, PageHeader } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export const NavBar = () => {
  let navigate = useNavigate();
  const location = useLocation()
  const [homeIsActive, setHomeIsActive] = useState(false)
  useEffect(() => {
    if (location.pathname === '/') {
      setHomeIsActive(true)
    } else {
      setHomeIsActive(false)
    }
  }, [location.pathname])

  const className = 'text-blue-500 cursor-pointer'
  return (
    <div>
      <PageHeader className="bg-gray-800 text-white">
        <Row justify='space-around'>
          <Col onClick={() => navigate('/')} className={homeIsActive ? className : ''}>报名</Col>
          <Col onClick={() => navigate('/table')} className={!homeIsActive ? className: ''}>历史记录</Col>
        </Row>
      </PageHeader>
    </div>
  )
}
