import React from "react"
import { Title } from './title.styled'

const title: React.FC<{ children: React.ReactNode }> = ({ 
  children, 
}) => {
  return (
    <Title>{children}</Title>
  )
}

export default title
