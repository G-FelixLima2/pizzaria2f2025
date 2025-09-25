// ferramenta de consumo de rotas (endpoints) do backend
import axios from "axios"
// Hooks do react - estado e renderização
import { useState, useEffect } from "react"

const Produtos = () => {
    // estado com listas de pizzas
    const [pizzas, setPizzas] = useState(['Calabresa', 'Muçarela', 'Baiana'])

    //Consumo de um endpoint com as pizzas
    // GET - busca os dados do endpoint ou rota
    //THEN - é uma Promise - método assíncrono
    useEffect(()=>{
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(response=>{
        console.log(response.data.data)
        setPizzas(response.data.data)
    })
    .catch(errors=>console.log(errors))
    },[])

    //Iteração da lista de pizzas
    const listapizzas = pizzas.map(pizza=><li>{pizza.nome}</li>)

    return (
        <div>
            <ul>
                {listapizzas}
            </ul>
        </div>
    )
}

export default Produtos