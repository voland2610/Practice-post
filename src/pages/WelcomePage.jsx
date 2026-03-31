import { useNavigate } from "react-router";
import styles from '../styles/welcomPage/WelcomPage.module.css'; // если styles на уровень выше


function WelcomePage() {
  const navigate = useNavigate();
  const goToSettings = () => {
    navigate("/ContentPage"); 
  };
  return (
    <>
      <div className={styles.button_center}>
        <button className={styles.button} onClick={goToSettings}>Начать</button>
      </div>
      
    </>
  );
}

export default WelcomePage;
