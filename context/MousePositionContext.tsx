import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'

export const MousePositionContext = createContext({ x: 0, y: 0 })

export const MousePositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const w = window.innerWidth
    const h = window.innerHeight
    window.addEventListener('mousemove', (e: MouseEvent) => {
      const offsetX = 0.5 - e.pageX / w // cursor position X
      const offsetY = 0.5 - e.pageY / h // cursor position Y
      setMousePosition({ x: offsetX, y: offsetY })
    })
  }, [])

  return <MousePositionContext.Provider value={mousePosition}>{children}</MousePositionContext.Provider>
}
