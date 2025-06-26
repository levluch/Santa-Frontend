import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout className="home-page">
      <Header className="header">
        <Title level={2} className="header-title">Тайный Санта</Title>
        <Link to="/profile">
          <Button type="link" className="profile-btn">Личный кабинет</Button>
        </Link>
      </Header>

      <div className="button-section">
        <Link to="/invitations">
          <Button type="primary" className="full-width-btn">Мои приглашения</Button>
        </Link>
        <Link to="/my-events">
          <Button type="primary" className="full-width-btn">Мои мероприятия</Button>
        </Link>
      </div>

      <Content className="main-content">
        <div className="event-section">
          <Button type="primary" className="create-event-btn">Создать мероприятие</Button>
          <Text className="event-text">Создайте своё зимнее волшебство</Text>
          <Text className="event-subtext">От 5 участников • Анонимно • Сюрприз 100%</Text>
        </div>
      </Content>

      <Footer className="footer">
        <Text className="footer-text">© 2025 Тайный Санта. Все права защищены. Сделано с ❄ и 🎁</Text>
      </Footer>
    </Layout>
  );
};

export default HomePage;
