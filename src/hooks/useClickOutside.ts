import {type RefObject, useEffect, useState} from 'react'

const useClickOutside = (ref: RefObject<HTMLElement>) => {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClicked(true)
        return true
      }
      setIsClicked(false)
      return false
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, isClicked])

  return isClicked
}

export default useClickOutside
