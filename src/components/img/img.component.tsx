import React, { useState } from "react"
import { Image, ImageError, ContainerImage } from './img.styled'

const Img: React.FC<{ alt?: string, src: string, className?: string }> = ({ alt, src, className }) => {
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)

  const onload = () => {
    setLoad(true)
  }

  const onerror = () => {
    setError(true)
  }

  if (error) {
    <ImageError>{alt}</ImageError>
  }  

  return (
    <ContainerImage className={className}>
      <Image onLoad={onload} onError={onerror} alt={alt} src={src} load={load} data-testid="Image" />
    </ContainerImage>
  )
}

export default Img
