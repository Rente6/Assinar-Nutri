import "../src/Assi.css"
import Ndecoracao from "../src/assets/Ndecoracao.png"
import Bola1 from "../src/assets/Bola1.png"
import Bola2 from "../src/assets/Bola2.png"
function Assinar(){
    return(
        <>
<img src={Bola1} alt=""  className="bola1"/>
        <div className="oi">
            <h1>Plano</h1>
            <p>Assine nosso plano e tenha 
seu plano alimentar e o controle de sua atividades.
Plano de custos a partir de R$100,00.</p>

    <button className="entrar">Assinar</button>
        </div>
        <div className="enfeite">
         <img src={Ndecoracao} alt="" />
         </div>
         <img src={Bola2} alt=""  className="bola2"/>
        </>
    )
}
export default Assinar