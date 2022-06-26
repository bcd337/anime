import modal from 'modal'
import { isDuplicate } from 'hooks/useCollection'

export const createCollectionName = (): Promise<string> => modal.fire({
  title: <p>Please Input Collection Name:</p>,
  input: 'text',
  inputPlaceholder: 'Enter Collection Name',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Save',
  inputValidator: (name) => {
    if (!name) return 'Must not empty'
    if (isDuplicate(name)) return `${name} has been used`
    return null
  },
}).then((name) => {
  return String(name.value || '')
})

export default createCollectionName
