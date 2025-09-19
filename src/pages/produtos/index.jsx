import axios from "axios"

const Produtos = () => {
    //Consumo de um endpoint com as pizzas
    axios.get("http://172.19.0.49/pizzarioficial/api/v1/produto")
    .then(response=>{
        console.log(response.data)
    })

    //Iteração da lista de pizzas
    const listapizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
                {listapizzas}
            </ul>
        </div>
    )
}

export default Produtos