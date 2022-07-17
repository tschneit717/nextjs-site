import { useEffect, useState } from 'react'

export const useFloat = (x, y, sensitivity = 10) => {
  const [transformSettings, setTransformSettings] = useState('')

  useEffect(() => {
    setTransformSettings('translate3d(0, ' + -x * sensitivity + 'px, 0) rotateX(' + (-y * sensitivity) + 'deg) rotateY(' + (x * (sensitivity * 2)) + 'deg)')
  })

  return transformSettings
}
