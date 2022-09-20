import React, { useEffect, useLayoutEffect, useState } from "react"
import { EnderecoContext } from "../contexts/EnderecoContext"

export default function () {
    const [todasCidades, setTodasCidades] = useState([])
    const {uf, cidade, setCidade} = React.useContext(EnderecoContext)        
    const selecionarCidade = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }

    async function HackeandoLocalizacao() {
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setTodasCidades(cidades)
    }

    useEffect(() => {
        HackeandoLocalizacao()
    }, [uf])

    return <>
        {!uf
            ? <div>
                <label>12 \buscar-local-do-ip: </label>
                <select>
                    <option></option>
                </select>
            </div>
            : <div>
                <select onChange={selecionarCidade} value={cidade}>
                    {todasCidades.map(({ nome }, idx) => <option key={idx} value={nome}>{nome}</option>)}
                </select>
            </div>
        }
    </>
}