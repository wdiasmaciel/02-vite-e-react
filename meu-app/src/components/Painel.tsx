import './Painel.css'
import Cabecalho from './Cabecalho'
import MenuLateral from './MenuLateral'
import Principal from './Principal'
import Rodape from './Rodape'

export default function Painel() {
  return (
    <div className="painel">
      <Cabecalho />
      <section >
        <MenuLateral />
        <Principal />
      </section>
      <Rodape />
    </div>
  )
}
