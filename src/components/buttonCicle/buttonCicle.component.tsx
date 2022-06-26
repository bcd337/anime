import React, { MouseEventHandler, ReactNode } from 'react'
import { Container } from './buttonCicle.styled'

const ButtonCicle: React.FC<{ className?: string, children: ReactNode, onClick?: MouseEventHandler, title?: string }> = ({
  className,
  children,
  onClick,
  title,
}) => {
  return (
    <Container className={className} onClick={onClick} title={title} data-testid="ButtonCicle-Container">
      {children}
    </Container>
  )
}

export default ButtonCicle