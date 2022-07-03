import "./menu.css";
export default function Menu({ onRestartGame }) {
  return (
    <div className="menu">
      <button onClick={onRestartGame}>Restart</button>
    </div>
  );
}
