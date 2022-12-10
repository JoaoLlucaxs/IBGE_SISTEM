import styled from "styled-components";

export const Container=styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

   
@media only screen and (max-width:840px) {
 &{
  display: flex;
  flex-direction: column;
 }
}
`

export const Container_img=styled.div`
  img{width: 100%;}
`

export const Container_select=styled.div`
  border-radius: 16px;
  align-items: center;

  select{
    display: block;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #cccc;
    border-radius: 8px;
    border: 0;
    padding: 20px 48px;
    font-size: 32px;
    color: #222;
    margin-top: 1.2rem;
  }

     
@media only screen and (max-width:840px) {
 &{
  max-width: 100%;
 }
}
 
`