import { Link } from "./collectionInfoItem.styled"

const collectionInfoItem: React.FC<{ name: string, color: string }> = ({ name, color }) => {
  return (
    <Link to={`/collection/${name}`} color={color} data-testid="collectionInfoItem-Link">
      {name}
    </Link>
  )
}

export default collectionInfoItem
