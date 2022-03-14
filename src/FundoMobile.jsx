export default FundoMobile;
function FundoMobile() {
    return (
        <div className="fundo-mobile">
            <IconesFundoMobile nomeIcone="home"/>
            <IconesFundoMobile nomeIcone="search-outline"/>
            <IconesFundoMobile nomeIcone="add-circle-outline"/>
            <IconesFundoMobile nomeIcone="heart-outline"/>
            <IconesFundoMobile nomeIcone="person-outline"/>
        </div>
    );
}
function IconesFundoMobile(props){
    const{nomeIcone}=props;
    return(
        <ion-icon name={nomeIcone}></ion-icon>
    );
}