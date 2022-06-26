import { Image } from './animeBannerImage.styled'

const AnimeBannerImage: React.FC<{ src: string, className?: string }> = ({ 
  src,
  className,
}) => {
  return (
    <Image src={src} className={className} data-testid="Image" />
  )
}

export default AnimeBannerImage
