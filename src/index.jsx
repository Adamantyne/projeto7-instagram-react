import reactDom from "react-dom";
import Stories from "./Stories";
import Posts from "./Posts";
import FundoMobile from "./FundoMobile";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="root">
            <Navbar />
            <section className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </section>
            <FundoMobile />
        </div>
    );
}
const Main = document.querySelector("main");
const conteudo = App();
reactDom.render(conteudo,Main);