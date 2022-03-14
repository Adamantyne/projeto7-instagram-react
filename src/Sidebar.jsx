export default Sidebar;

const objetoSidebarUsuario = {
    usuarioImagem: "assets/img/catanacomics.svg",
    usuarioNome: "catanacomics",
    usuarioApelido: "Catana"
}
const { usuarioImagem, usuarioNome, usuarioApelido } = objetoSidebarUsuario;

const objetosSugestao = [
    {
        imagemSugestao: "assets/img/bad.vibes.memes.svg",
        nomeSugestao: "bad.vibes.memes",
        razaoSugestao: "Segue você"
    }, {
        imagemSugestao: "assets/img/chibirdart.svg",
        nomeSugestao: "chibirdart",
        razaoSugestao: "Segue você"
    }, {
        imagemSugestao: "assets/img/razoesparaacreditar.svg",
        nomeSugestao: "razoesparaacreditar",
        razaoSugestao: "Novo no Instagram"
    }, {
        imagemSugestao: "assets/img/adorable_animals.svg",
        nomeSugestao: "adorable_animals",
        razaoSugestao: "Segue você"
    }, {
        imagemSugestao: "assets/img/smallcutecats.svg",
        nomeSugestao: "smallcutecats",
        razaoSugestao: "Segue você"
    }
];


function Sidebar() {
    return (
        <section className="sidebar">
            <PropsUsuarioSidebar
                propsImagem={usuarioImagem}
                propsNome={usuarioNome}
                propsApelido={usuarioApelido}
            />
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {objetosSugestao.map(objetoSugestao => {
                    const { imagemSugestao, nomeSugestao, razaoSugestao } = objetoSugestao;
                    return (
                        <PropsSugestoes
                            propsImagem={imagemSugestao}
                            propsNome={nomeSugestao}
                            propsRazao={razaoSugestao}
                        />
                    );
                })}

            </div>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </section>
    );
}

function PropsSugestoes(props) {
    const { propsImagem, propsNome, propsRazao } = props;
    return (
        <article className="sugestao">
            <div className="usuario">
                <img src={propsImagem} />
                <div className="texto">
                    <div className="nome">{propsNome}</div>
                    <div className="razao">{propsRazao}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </article>
    );
}
function PropsUsuarioSidebar(props) {
    const { propsImagem, propsNome, propsApelido } = props;
    return (
        <article className="usuario">
            <img src={propsImagem} />
            <div className="texto">
                <strong>{propsNome}</strong>
                {propsApelido}
            </div>
        </article>
    );
}