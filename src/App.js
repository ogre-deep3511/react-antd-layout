import './App.css';
import { Layout, Typography, Avatar, Menu, Breadcrumb  } from 'antd';
import { MailOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
        <Avatar style={{float: 'right'}} src='./dp.png' />
        <Title style={{color: 'white'}} level={3}>ENLUME</Title>
      </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu icon={<MailOutlined />} title="About us">
                <Menu.ItemGroup key='Aboutus' title='Country 1'>
                  <Menu.Item key='location1'>Location 1</Menu.Item>
                  <Menu.Item key='location2'>Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design Layout Example Created by Deepak</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
