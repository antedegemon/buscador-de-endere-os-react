import React, {useState} from "react"

interface iEndereco
{
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    CPF: string,
    setCPF: React.Dispatch<React.SetStateAction<string>>,
}

export const EnderecoContext = React.createContext({} as iEndereco)
export default function EnderecoContextProvider(props: React.PropsWithChildren) 
{
    const [CPF, setCPF] = useState("")
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    
    return (
        <EnderecoContext.Provider value=
          {{CPF, setCPF, uf, setUf, cidade, setCidade}}
        >
          {props.children}
        </EnderecoContext.Provider>
      )
}
  
