import React from 'react';
import { Link } from 'react-router-dom'; // Если используется React Router
import "../css/mainLanding.css"

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Добро пожаловать в TaskTracker</h1>
        <p>Ваш инструмент для управления задачами</p>
      </header>
      <section className="features">
        <h2>Основные возможности</h2>
        <div className="feature">
          <h3>Отслеживание задач</h3>
          <p>Создавайте, назначайте и отслеживайте задачи и проекты в одном месте.</p>
        </div>
        <div className="feature">
          <h3>Гибкая настройка</h3>
          <p>Настройте процессы работы под свои нужды с помощью настраиваемых досок и статусов.</p>
        </div>
        <div className="feature">
          <h3>Коллаборация</h3>
          <p>Работайте в команде, обменивайтесь идеями и комментариями к задачам.</p>
        </div>
      </section>
      <section className="call-to-action">
        <h2>Начните управлять задачами прямо сейчас!</h2>
        <Link to="/signup" className="btn btn-primary">Регистрация</Link>
        <Link to="/login" className="btn btn-secondary">Вход</Link>
      </section>
      <footer>
        <p>TaskTracker &copy; 2024. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
