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
    case 'left':
      return tail ? <ArrowLeft className={className} /> : <ArrowSmallLeft className={className} />
    case 'right':
      return tail ? <ArrowRight className={className} /> : <ArrowSmallRight className={className} />
    case 'top':
      return tail ? <ArrowTop className={className} /> : <ArrowSmallTop className={className} />
    case 'bottom':
      return tail ? <ArrowBottom className={className} /> : <ArrowSmallBottom className={className} />
    default:
      return tail ? <ArrowLeft className={className} /> : <ArrowSmallLeft className={className} />
  }
}

export default Arrow