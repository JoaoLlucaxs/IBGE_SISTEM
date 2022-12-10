import axios from "axios";

const instance=axios.create({
    baseURL:'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
})

export default instance