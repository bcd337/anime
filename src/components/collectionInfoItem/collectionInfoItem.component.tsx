import { Link } from "./collectionInfoItem.styled"

const collectionInfoItem: React.FC<{ name: string, color: string }> = ({ name, color }) => {


  return (
    <Link to={`/collection/${name}`} color={color}>
      {name}
    </Link>
  )
}

export default collectionInfoItem
