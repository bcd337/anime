import modal from 'modal'
import ManageCollection from 'components/manageCollection'

const manageCollection = () => {
  return modal.fire({
    html: <ManageCollection />,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    footer: false,
    title: 'Manage Collection',
  })
}

export default manageCollection
