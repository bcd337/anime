import React, { ChangeEventHandler } from 'react'
import { Container } from './select.styled'

const Select: React.FC<{
  className?: string,
  onChange: ChangeEventHandler, 
  value: string | number,
  options: { value: string | number, label: string}[]
}> = ({
  className, 
  onChange,
  value,
  options,
}) => {
  return (
    <Container onChange={onChange} value={value} className={className}>
      {options.map((v) => <option key={v.value} value={v.value}>{v.label}</option>)}
    </Container>
  )
}

export default Select