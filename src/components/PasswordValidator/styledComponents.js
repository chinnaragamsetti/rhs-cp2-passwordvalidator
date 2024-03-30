// Style your elements here
import styled from 'styled-components'

export const MainCont = styled.div`
  height: 100vh;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  padding: 50px;
  border-radius: 5px;
`
export const MainHead = styled.h1`
  font-size: 35px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Para = styled.p`
  font-size: 10px;
  color: #ffffff;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
`
export const Error = styled.p`
  font-size: 15px;
  color: red;
`
