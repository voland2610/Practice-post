import { useNavigate } from "react-router";

const TabButton = ({ label, path, isActive, onClick, styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    onClick();
  };

  return (
    <button
      className={`${styles.tab} ${isActive ? styles["tab-color"] : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TabButton;