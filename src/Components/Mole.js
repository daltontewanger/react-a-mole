import { useEffect } from "react";
import moleImg from "../mole.png";

function Mole(props) {
  useEffect(() => {
    const randSeconds = Math.ceil(Math.random() * 5000);
    const timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleImg}
        alt="Mole"
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Mole;
