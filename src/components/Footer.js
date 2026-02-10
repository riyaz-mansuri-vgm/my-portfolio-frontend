// src/components/Footer.js
const Footer=()=> {
  return (
    <footer style={{ padding: "1rem", textAlign: "center", background: "#333", color: "#fff" }}>
      &copy; {new Date().getFullYear()} My Portfolio
    </footer>
  );
}

export default Footer;
