// src/pages/Projects.js

const Projects=()=> {
const products = [
    { title: "Rego", desc: "Smart billing app built using .NET & React." },
    { title: "Token Lelo", desc: "Clean and fast portfolio builder platform." },
    { title: "My Vakil Diary", desc: "Enterprise-level API built with .NET Core." },
     { title: "Khalihan", desc: "Enterprise-level API built with .NET Core." },
  ];

  return (
    <div className="product-wrapper">
      <h1 className="product-title">My Projects</h1>

      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <button className="view-btn">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
  
}
export default Projects;
