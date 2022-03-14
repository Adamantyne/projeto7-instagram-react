export default Navbar;
function Navbar() {
    return (
        <section className="navbar">
            <div className="container">
                <article className="logo">
                    <IconesNavbar nomeIconeNavbar="logo-instagram" />
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" />
                </article>
                <div className="logo-mobile">
                    <IconesNavbar nomeIconeNavbar="logo-instagram" />
                </div>
                <article className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </article>
                <article className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </article>
                <div className="icones">
                    <IconesNavbar nomeIconeNavbar="paper-plane-outline" />
                    <IconesNavbar nomeIconeNavbar="compass-outline" />
                    <IconesNavbar nomeIconeNavbar="heart-outline" />
                    <IconesNavbar nomeIconeNavbar="person-outline" />
                </div>
                <div className="icones-mobile">
                    <IconesNavbar nomeIconeNavbar="paper-plane-outline" />
                </div>
            </div>
        </section>
    );
}

function IconesNavbar(props) {
    const { nomeIconeNavbar } = props;
    return (
        <ion-icon name={nomeIconeNavbar}></ion-icon>
    );
}