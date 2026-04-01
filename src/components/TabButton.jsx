import { useNavigate } from "react-router";

const TabButton = (props) => {
  const { label, path } = props;
  const navigate = useNavigate();
  const goToSettings = () => {
    navigate(path);
  }
  return (
    <>
      <button onClick={goToSettings}>{label}</button>
    </>
  );
};

export default TabButton;
