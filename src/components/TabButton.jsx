import { useNavigate } from "react-router";

const TabButton = (props) => {
  const { label, path, styles } = props;
  const navigate = useNavigate();
  const goToSettings = (event) => {
    navigate(path);

    const button = event.currentTarget;
    
    const allButtons = button.parentElement.querySelectorAll('button');
    allButtons.forEach(btn => btn.classList.remove(styles['tab-color']));
    
    button.classList.add(styles['tab-color']);

  }
  return (
    <>
      <button className={styles.tab} onClick={goToSettings}>{label}</button>
    </>
  );
};

export default TabButton;
