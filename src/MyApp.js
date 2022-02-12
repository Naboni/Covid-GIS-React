import React from 'react'
import { Layout } from 'antd';
import App from './Components/App'
import AppHeader from './Components/Header'
import AppFooter from './Components/Footer'

const { Header, Content, Footer } = Layout;
export default function Mypp() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <App />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  )
}
