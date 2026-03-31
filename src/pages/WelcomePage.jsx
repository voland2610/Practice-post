import { useNavigate } from "react-router";

function WelcomePage(){
    const navigate = useNavigate();
    const goToSettings = () => {
    navigate("/ContentPage"); // меняет URL и рендерит компонент
  };
    return(
        <>
            <button onClick={goToSettings}>asdasdasd</button>
        </>
    )
}

export default WelcomePage;