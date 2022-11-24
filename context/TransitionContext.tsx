import { useRouter } from 'next/router'
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useCallback, useEffect, useState } from 'react'

interface TransitionContextInterface {
  isTransitioning: boolean;
  toggleIsTransitioning: Dispatch<SetStateAction<boolean>>;
  routerWrapper: {
    push: (url: string) => void;
  }
}

export const TransitionContext = createContext<TransitionContextInterface | null>(null)

export const TransitionProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [isTransitioning, toggleIsTransitioning] = useState(false)

  const startAnimation = () => {
    toggleIsTransitioning(true)
  }

  const routerWrapper = {
    push: (url: string) => {
      startAnimation()
      router.push(url)
    }
  }

  useEffect(() => {
    const routeChangeStart = (url, { shallow }) => {
      startAnimation()
    }

    router.events.on('routeChangeStart', routeChangeStart)

    return () => {
      router.events.off('routeChangeStart', routeChangeStart)
    }
  }, [])

  return (
    <TransitionContext.Provider value={{ isTransitioning, toggleIsTransitioning, routerWrapper } }>
      {children}
    </TransitionContext.Provider>
  )
}
