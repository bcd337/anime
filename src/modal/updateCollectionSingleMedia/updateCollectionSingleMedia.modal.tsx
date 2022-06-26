import modal from 'modal'
import { Media } from 'common/interfaces/media.interface'
import UpdateCollection from 'components/updateCollection'

const updateCollectionSingleMedia = (id: string | number, media: Media) => {
  return modal.fire({
    html: <UpdateCollection id={id} media={media} colorFill={true} />,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    footer: false,
    title: 'Choose Collection',
  })
}

export default updateCollectionSingleMedia
