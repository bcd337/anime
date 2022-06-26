import { MouseEventHandler } from 'react'
import { IconTrash } from 'assets/svg'
import { toast } from 'react-toastify'
import MySwal from 'modal'
import { removeMediaFromCollection } from 'hooks/useCollection'
import { ContainerIcon } from "./deleteAction.styled"

const DeleteAction: React.FC<{ 
  id: number,
  title: string,
  name: string,
  className?: string,
}> = ({
  id,
  title,
  name,
  className,
}) => {
  const onRemove: MouseEventHandler = async (event) => {
    event.preventDefault()

    MySwal.fire({
      text: `Are you sure want to remove "${title}" from "${name}" collection?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (!result.isConfirmed) return

      toast.info(`"${title}" has been remove from "${name}" collection`)
      removeMediaFromCollection(name, id)
    })
  }

  return (
    <ContainerIcon
      onClick={onRemove}
      className={className}
      title="Remove from collection"
      data-testid="DeleteAction"
    >
      <IconTrash />
    </ContainerIcon>
  )
}

export default DeleteAction
