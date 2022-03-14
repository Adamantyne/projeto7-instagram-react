export default Posts;
const objetosPosts = [{
    fotoUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    conteudoPost: "assets/img/gato-telefone.svg",
    fotoCurtidas: "assets/img/respondeai.svg",
    nomeCurtidas: "respondeai",
    numeroCurtidas: "101.523"
},{
    fotoUsuario: "assets/img/barked.svg",
    nomeUsuario: "barked",
    conteudoPost: "assets/img/dog.svg",
    fotoCurtidas: "assets/img/adorable_animals.svg",
    nomeCurtidas: "adorable_animals",
    numeroCurtidas: "99.159"
}]

function Posts() {
    return (
        <section className="posts">
            {
                objetosPosts.map(objetoPosts => {
                    const {
                        fotoUsuario,
                        nomeUsuario,
                        conteudoPost,
                        fotoCurtidas,
                        nomeCurtidas,
                        numeroCurtidas
                    } = objetoPosts;
                    return (
                        <article className="post">
                            <TopoPosts fotoProps={fotoUsuario} nomeProps={nomeUsuario} />
                            <ConteudoPost conteudoProps={conteudoPost} />
                            <div className="fundo">
                                <Acoes />
                                <Curtidas
                                    imagemProps={fotoCurtidas}
                                    nomeProps={nomeCurtidas}
                                    numeroProps={numeroCurtidas}
                                />
                            </div>
                        </article>
                    );
                })
            }
        </section>
    );
}
function TopoPosts(props) {
    const { fotoProps, nomeProps } = props
    return (
        <section className="topo">
            <div className="usuario">
                <img src={fotoProps} />
                {nomeProps}
            </div>
            <div className="acoes">
                <IconesPosts nomeIcone="ellipsis-horizontal"/>
            </div>
        </section>
    );
}
function ConteudoPost(props) {
    const { conteudoProps } = props
    return (
        <figure className="conteudo">
            <img src={conteudoProps} />
        </figure>
    );
}
function Acoes() {
    return (
        <section className="acoes">
            <div>
                <IconesPosts nomeIcone="heart-outline"/>
                <IconesPosts nomeIcone="chatbubble-outline"/>
                <IconesPosts nomeIcone="paper-plane-outline"/>
            </div>
            <div>
                <IconesPosts nomeIcone="bookmark-outline"/>
            </div>
        </section>
    )
}
function Curtidas(props) {
    const { imagemProps, nomeProps, numeroProps } = props
    return (
        <section className="curtidas">
            <img src={imagemProps} />
            <div className="texto">
                Curtido por <strong>{nomeProps}</strong> e <strong>outras {numeroProps} pessoas</strong>
            </div>
        </section>
    );
}
function IconesPosts(props){
    const{nomeIcone}=props;
    return(
        <ion-icon name={nomeIcone}></ion-icon>
    );
}