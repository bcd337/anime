import {
  ArrowLeft, ArrowRight, ArrowTop, ArrowBottom,
  ArrowSmallLeft, ArrowSmallRight, ArrowSmallTop, ArrowSmallBottom,
} from "./arrow.styled"

const Arrow: React.FC<{ direction?: 'left' | 'right' | 'top' | 'bottom', className?: string, tail?: boolean }> = ({
  direction,
  className,
  tail = true,
}) => {
  switch (direction) {
    case 'right':
      return tail ?
        <ArrowRight className={className} data-testid="ArrowRight"/> :
        <ArrowSmallRight className={className} data-testid="ArrowSmallRight"/>
    case 'top':
      return tail ?
        <ArrowTop className={className} data-testid="ArrowTop"/> :
        <ArrowSmallTop className={className} data-testid="ArrowSmallTop"/>
    case 'bottom':
      return tail ?
        <ArrowBottom className={className} data-testid="ArrowBottom"/> :
        <ArrowSmallBottom className={className} data-testid="ArrowSmallBottom"/>
    case 'left':
    default:
      return tail ?
        <ArrowLeft className={className} data-testid="ArrowLeft"/> :
        <ArrowSmallLeft className={className} data-testid="ArrowSmallLeft"/>
  }
}

export default Arrow