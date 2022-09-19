import React, { useState } from "react"
import {EnderecoContext} from "../contexts/EnderecoContext"

export default function()
{
    //eu percebi mt tempo dps que eu estava escrevendo cpf ao inves de cep... vai ficar assim agora
    const {setUf, setCidade, setCPF} = React.useContext(EnderecoContext)
    const [error, setError] = useState(false)
    const loadCPF = async (ev: React.KeyboardEvent<HTMLInputElement>) =>{
        if (ev.currentTarget.value.length < 9) return
        setCPF(ev.currentTarget.value)
        ObterCoordenadas(ev.currentTarget.value) 
    }
    //é isso que roda quando voce entra em sites chineses
    const ObterCoordenadas = async (cep: string) =>{
        const requestCode = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responseCode = await requestCode.json()
        if (responseCode.erro) 
        {
            setError(responseCode.erro)
            return
        }
        setError(false)
        setUf(responseCode.uf)
        setCidade(responseCode.localidade)
    }

    const mascra = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }



    return <>
        <div className="input">
            <label htmlFor="input-code">\incerir-codigo-da-deepweb: </label>
            <input type="text" maxLength={9} onKeyUp={
                (ev) => {
                    mascra(ev)
                    loadCPF(ev)
                }
            } />
        </div>
        <span className="erro">
            {error
                ? "falha no sistema, problema encontrado: 'system32'. deletar pasta (system32)? [y/n]"
                : ""
            }
        </span>
    </>

}
