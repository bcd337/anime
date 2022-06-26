import { MouseEventHandler } from 'react'
import { IconHeart } from 'assets/svg'
import { toast } from 'react-toastify'
import createCollectionName from 'modal/createCollectionName'
import updateCollectionSingleMedia from 'modal/updateCollectionSingleMedia'
import { addMediaToCollection, useAllCollectionOfAnime, useCollection, removeMediaFromCollection } from 'hooks/useCollection'
import { Title, CoverImage } from 'common/interfaces/media.interface'
import { ContainerIcon } from "./collectionAction.styled"

const CollectionAction: React.FC<{ 
  id: number,
  title: Title,
  coverImage: CoverImage,
  className?: string,
  icon: boolean,
}> = ({
  icon,
  id,
  title,
  coverImage,
  className,
}) => {
  const collection = useCollection()
  const collectionOfAnime = useAllCollectionOfAnime(id)

  const toogleCollection: MouseEventHandler = async (event) => {
    event.preventDefault()
    const showTitle = title.romaji || title.english || title.native
    
    if (collection.length > 1) {
      await updateCollectionSingleMedia(id, {
        id,
        coverImage,
        title,
      })
      return
    }

    let name = ''

    if (collection.length === 0) {
      name = await createCollectionName()
      if (!name) return
    } else {
      name = collection[0].name
    }

    if (collectionOfAnime.length > 0) {
      toast.info(`"${showTitle}" has been remove from "${name}" collection`)
      removeMediaFromCollection(name, id)
      return
    }

    toast.success(`"${showTitle}" has been add to "${name}" collection`)
    addMediaToCollection(name, {
      id,
      coverImage,
      title,
    })
  }

  const titleQuick = collectionOfAnime.length === 0 ? "Quick add to Collection" : 'Quick remove from collection'
  const titleIcon = collection.length > 1 ? 'Manage collection for this anime' : titleQuick

  if (icon) {
    return (
    <ContainerIcon
      onClick={toogleCollection}
      love={!!collectionOfAnime.length}
      className={className}
      title={titleIcon}
    >
      <IconHeart />
    </ContainerIcon>
    )
  }

  return null
}

export default CollectionAction
