import React from 'react'
import {Container} from "./styles"



export const Tabuleiro = () => {
  let contador = 0
  let isPar = false
  let dividendo = isPar ? 0 : 1
  
  
  
  return (
    <Container>
    { Array(64).fill().map( (item, i) => {
      
      if( i % 2 == dividendo && contador < 8 ){
        contador++
        return <div className='black' key={i}>{i}</div>
      }
      
      if(contador > 7){
        contador = 0
        isPar = !isPar
        dividendo = isPar ? 0 : 1
        if( i % 2 == dividendo){
          contador++
          return <div className='black' key={i}>{i}</div>
        }
      }
      
      contador++
      return <div key={i}>{i}</div>
      
    }) }
    </Container>
    )
  }
