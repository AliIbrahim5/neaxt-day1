import headersyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headersyles.title}>
        <span>Web</span> header
      </h1>
      <p className={headersyles.description}>Teaching and debugging experience</p>
    </div>
  );
}

export default Header;
