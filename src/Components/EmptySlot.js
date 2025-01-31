import { useEffect } from "react";
import MoleHill from "../molehill.png";

function EmptySlot(props) {
  useEffect(() => {
    const randSeconds = Math.ceil(Math.random() * 5000);
    const timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <img style={{ width: "30vw" }} src={MoleHill} alt="Mole Hill" />
    </div>
  );
}

export default EmptySlot;
