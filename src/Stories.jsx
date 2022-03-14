export default Stories;

const objetosStories = [
    {
        imagemStories: "assets/img/9gag.svg",
        nomeStories: "9gag"
    }, {
        imagemStories: "assets/img/meowed.svg",
        nomeStories: "meowed"
    }, {
        imagemStories: "assets/img/barked.svg",
        nomeStories: "barked"
    }, {
        imagemStories: "assets/img/nathanwpylestrangeplanet.svg",
        nomeStories: "nathanwpylestrangeplanet"
    }, {
        imagemStories: "assets/img/wawawicomics.svg",
        nomeStories: "wawawicomics"
    }, {
        imagemStories: "assets/img/respondeai.svg",
        nomeStories: "respondeai"
    }, {
        imagemStories: "assets/img/filomoderna.svg",
        nomeStories: "filomoderna"
    }, {
        imagemStories: "assets/img/memeriagourmet.svg",
        nomeStories: "memeriagourmet"
    }
];

function Stories() {
    return (
        <section className="stories">
            {objetosStories.map(objetoStories => {
                const{imagemStories,nomeStories}=objetoStories;
                return (
                    <PropsStories propsImagem={imagemStories} propsNome={nomeStories}/>
                );
            })}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            
        </section>
    );
}

function PropsStories(props){
    const{propsImagem,propsNome}=props;
    return (
        <article className="story">
            <figure className="imagem">
                <img src={propsImagem} />
            </figure>
            <figcaption className="usuario">
                {propsNome}
            </figcaption>
        </article>
    );
}