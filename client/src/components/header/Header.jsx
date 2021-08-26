import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://w.wallhaven.cc/full/j3/wallhaven-j3wqwm.jpg"
        alt=""
      />
    </div>
  );
}
