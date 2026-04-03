import { useNavigate } from "react-router";

const TabButton = (props) => {
  const { label, path, styles } = props;
  const navigate = useNavigate();
  const goToSettings = () => {
    navigate(path);
  }
  return (
    <>
      <button className={styles.tab} onClick={goToSettings}>{label}</button>
    </>
  );
};

export default TabButton;
