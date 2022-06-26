import { makeVar, useReactiveVar  } from '@apollo/client'
import { Media, MediaCollection } from 'common/interfaces/media.interface'

const STORAGE_NAME = 'MediaCollection'

const getData = (): MediaCollection[] => {
  const existing = localStorage.getItem(STORAGE_NAME)
  if (existing) {
    const data = JSON.parse(existing)
    if (data) return data
  }
  return []
}

export const collectionVar = makeVar<MediaCollection[]>(getData())

export const setData = (newData: MediaCollection[]) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newData))
  collectionVar(newData)
}

export const addMediaToCollection = (name: string, anime: Media) => {
  const currentCollection = collectionVar()
  const find = currentCollection.findIndex((current) => name === current.name) >= 0

  if (!find) {
    return setData([
      ...currentCollection,
      {
        name,
        media: [anime],
        lastUsed: true,
      }
    ])
  }

  const newData = collectionVar().map((value) => {
    if (value.name !== name) return {
      ...value,
      lastUsed: false,
    }

    return {
      ...value,
      lastUsed: true,
      media: [
        ...value.media,
        anime
      ]
    }
  })

  return setData(newData)
}

export const removeMediaFromCollection = (name: string, removeId: number | string) => {
  const newData = collectionVar().map((value) => {
    if (value.name !== name) return value

    return {
      ...value,
      media: value.media.filter(({ id }) => id !== removeId)
    }
  })

  setData(newData)
}

export const addCollection = (name: string) => {
  return setData([
    ...collectionVar(),
    {
      name,
      media: [],
      lastUsed: false,
    },
  ])
}

export const renameCollection = (name: string, newName: string) => {
  const currentCollection = collectionVar()
  const notUnique = currentCollection.findIndex((v) => v.name === newName) >= 0
  if (notUnique) return false

  return setData(collectionVar().map((value) => {
    if (value.name !== name) return value 
    return {
      ...value,
      name: newName,
    }
  }))
}

export const removeCollection = (name: string) => {
  return setData(collectionVar().filter((value) => value.name !== name))
}

export const useAllCollectionName = () => {
  return useReactiveVar(collectionVar).map(({ name }) => name)
}

export const useAnimeInCollection = (name: string) => {
  const currentCollection = useReactiveVar(collectionVar).find((v) => v.name === name)
  return currentCollection?.media || []
}

export const useAllCollectionOfAnime = (id: string | number) => { 
  const filter = useReactiveVar(collectionVar).filter(({ media }) => media.findIndex((v) => v.id === id) >= 0)
  return filter.map(({ name }) => name)
}

export const useAllAnimeInCollection = () => {
  const merge = useReactiveVar(collectionVar).reduce((prev: Media[], { media }) => {
    return [
      ...prev,
      ...media
    ]
  }, [])

  return merge.filter((v, i, arr) => arr.findIndex(({ id }) => id === v.id) === i)
}

export const useCollection = () => useReactiveVar(collectionVar)

export const isDuplicate = (name: string) => collectionVar().findIndex((value) => value.name === name) >= 0

export default collectionVar
