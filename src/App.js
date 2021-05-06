import './App.css';
import Inputs from './Componentes/Inputs'
import SobreIMC from './Componentes/Informacao/SobreIMC'
import SobreClassificacao from './Componentes/Informacao/SobreClassificacao'

function App() {
  return (
    <div className="App">

        <SobreIMC></SobreIMC>

        <Inputs></Inputs>

        <SobreClassificacao></SobreClassificacao>

    </div>
  );
}

export default App;
