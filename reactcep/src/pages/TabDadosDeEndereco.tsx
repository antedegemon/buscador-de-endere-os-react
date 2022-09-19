import React,{useState} from "react"
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import InputCPF from "../components/InputCPF"
import EnderecoContextProvider, {EnderecoContext} from "../contexts/EnderecoContext"
import "./Endereco.css"

export default function() {
    return <>
            <form>
                <InputCPF/>
                <InputEstados/>
                <InputCidades/>
            </form>
    </>
}