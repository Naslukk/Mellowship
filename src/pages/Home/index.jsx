import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const tasks = [
  { id: 1, title: 'Task 1' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🎯 Mellowship Tasks</h1>
      <div className={styles.grid}>
        {tasks.map(task => (
          <div key={task.id} className={styles.card}>
            <h3>{task.title}</h3>
            <button
              className={styles.viewButton}
              onClick={() => navigate(`/task/${task.id}`)}
            >
              View Page ➜
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
