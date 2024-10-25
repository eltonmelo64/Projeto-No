import React from "react";
import "./Navbar.css";
import HomeImage from '../../images/Home.png'; // Importação correta
import ico from '../../images/icone.ico';
<link rel="icon" href="/src/images/icone.ico"></link>

function Navbar() {
  const handleSearch = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    const query = event.target.elements.search.value; // Obtém o valor do input
    console.log("Buscando por:", query);
    // Aqui você pode implementar a lógica de busca que deseja
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="Inicio">
            <img
            src={HomeImage} // Usando a imagem importada
            alt="logo"
            title="Inicio"   
            />
          </a>
        </div>

        <div className="foralogo">
          <div className="uhuuu">
            <h1>Uhuuu!!!</h1>
          </div>
          <div className="listform">
            <div className="boxform">
              <form action="#" className="headerform"onSubmit={handleSearch}> 
                <input
                  name="search" // Adicionando nome para o input
                  className="inputtext"
                  type="text"
                  placeholder="   Buscar"
                />
                <input
                  className="headerformbutton"
                  type="submit"
                  title="Pesquisar"
                  value={"🔎"}
                />


            <ul className="headerlist">
              <li>
                {/* <a href="#">Início</a> */}
              </li>
              <li>
                <a href="#" title="Sobre">Sobre</a> {/* 🏦 🏢 🏭 💼 🤝 */}
              </li>
              <li>
                <a href="#" title="Contato">Contato</a> {/* ✆ 📞 ✉ */}
              </li>
              <li>
                <a href="#"  title="Login">Login</a> {/*  🏠 🔐 📧  */}                 
              </li>
            </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
