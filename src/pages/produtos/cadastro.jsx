import axios from 'axios'
import './produtos.css'
import { useEffect, useState } from 'react'

const CadastroProduto = () => {
    // estado para guardar dados
    const [dados, setDados] = useState({})

    const montaJson = () => {
        setDados({
            "nome":nome.value,
            "tipo":tipo.value,
            "precoVenda":preco.value,
            "descricao":descricao.value,
            "categoriaId":categoria_id.value
        })
        alert(JSON.stringify(dados))
    }

    return (
        <div className='CadastroProduto'>
            <input type="text" placeholder='0' id='id' disabled/>
            <input type="text" placeholder='nome do produto' id='nome' />
            <input type="text" placeholder='descrição' id='descricao' />
            <input type="text" placeholder='0.00' id='preco' />
            <input type="text" placeholder='tipo do produto' id='tipo' />
            <input type="text" placeholder='1' id='categoria_id' disabled />

            <input type="button"  value={"Cadastrar"}
                onClick={()=>{montaJson()}} />
        </div>
        
    )
}

export default CadastroProduto