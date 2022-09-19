import './App.css'
import TabDadosDeEndereco from './pages/TabDadosDeEndereco'
import EnderecoContextProvider from './contexts/EnderecoContext'

export default function () 
{
  return <>
  <div>
    <EnderecoContextProvider>
      <TabDadosDeEndereco/>
    </EnderecoContextProvider>
  </div>
</>
}
