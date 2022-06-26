import MySwal from "modal"
import { toast } from 'react-toastify'
import Link from "components/link"
import { Media } from "common/interfaces/media.interface"
import { renameCollection, removeCollection } from 'hooks/useCollection'
import createCollectionName from 'modal/createCollectionName'
import { Container, ContainerImage, ContainerDesc, Image, ContainerAction, ActionButton, Table, ImageColor } from "./collectionListItem.styled"

const CollectionListItem: React.FC<{ name: string, media: Media[], className?: string }> = ({ name, media, className }) => {

  const onChangeName = async () => {
    if (!name) return
    const newName = await createCollectionName()
    if (!newName) return
    renameCollection(name, newName)
  }

  const onDelete = async () => {
    MySwal.fire({
      text: `Are you sure want to remove "${name}" collection?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (!result.isConfirmed) return

      toast.info(`"${name}" collection has been remove`)
      removeCollection(name)
    })
  }

  return (
    <Container className={className}>
      <Link to={`/collection/${name}`}>
        <ContainerImage>
          {media.slice(0, 4).map(({ title, coverImage, id }) => {
            const showTitle = title ? title.romaji || title.english || title.native : ''
            const showImage = coverImage.medium || coverImage.large || coverImage.extraLarge

            if (!showImage) return <ImageColor color={coverImage.color}/>
            return <Image key={id} src={showImage} alt={showTitle} />
          })}
        </ContainerImage>
      </Link>
      <ContainerDesc>
        <div>
          <Table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Anime</td>
                <td>:</td>
                <td>{media.length}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <ContainerAction>
          <ActionButton onClick={onChangeName}>Edit Collection Name</ActionButton>
          <ActionButton onClick={onDelete}>Remove Collection</ActionButton>
        </ContainerAction>
      </ContainerDesc>
    </Container>
  )
}

export default CollectionListItem
