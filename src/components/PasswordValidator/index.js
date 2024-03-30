// Write your code here
import {useState} from 'react'
import {
  MainCont,
  SubCont,
  MainHead,
  Para,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputValue, input] = useState('')

  const onChangeInput = event => {
    input(event.target.value)
  }

  return (
    <MainCont>
      <SubCont>
        <MainHead>Password Validator</MainHead>
        <Para>Check how strong and secure is your password</Para>
        <Input onChange={onChangeInput} type="password" />
        {inputValue.length >= 8 ? (
          ''
        ) : (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </SubCont>
    </MainCont>
  )
}

export default PasswordValidator
