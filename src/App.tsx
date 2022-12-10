import {ChangeEvent, useEffect, useState} from 'react'
import {Container,Container_img,Container_select} from './styles/Style'
import axios from './axios/axios'
import {IBGE,IBGECITY} from './helpers/types'
import city from './assets/gifcity.gif'

function App() {
  const[ufs,setUf]=useState<IBGE[]>([])
  const[citys,setCitys]=useState<IBGECITY[]>([])
  const[selected,setSelected]=useState('0')
  const[selectedCity,setSelectedCity]=useState('0')

  useEffect(()=>{
    async function fetchApi(){
      const response=await axios.get('')
      const json=await response.data
      console.log(json)
      setUf(json)
    }
    fetchApi()
  },[])

  useEffect(()=>{
    async function apiMunicipios(){
      const response=await axios.get(`/${selected}/municipios`)
      const json=await response.data
      console.log(json)
      setCitys(json)
    }
   apiMunicipios()
  },[selected])

  function selectUf(e:ChangeEvent<HTMLSelectElement>){
    setSelected(e.target.value)
  }
  function selectCity(e:ChangeEvent<HTMLSelectElement>){
    setSelectedCity(e.target.value)
  }

  return (
   <Container>
    <Container_img>
      <img src={city} alt=''/>
    </Container_img>
   <Container_select>
    <select name='uf' id='uf'
    onChange={selectUf}>
      <option value='0'>Selecione sua UF</option>
     {ufs.map((uf)=>(
      <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
     ))}
    </select>
    <select name='city' id='city'
    onChange={selectCity}>
      <option value='0'>Selecione Cidade</option>
      {citys.map((city)=>(
      <option key={city.id} value={city.nome}>{city.nome}</option>
     ))}
    </select>
   </Container_select>
   </Container>
  )
}

export default App
