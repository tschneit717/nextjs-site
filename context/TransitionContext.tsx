import { useRouter } from 'next/router'
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState } from 'react'

interface TransitionContextInterface {
  transitionStatus: string;
  setTransitionStatus: Dispatch<SetStateAction<string>>;
  routerWrapper: {
    push: (url: string) => void;
  }
}

export const TransitionContext = createContext<TransitionContextInterface | null>(null)

export const TransitionProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [transitionStatus, setTransitionStatus] = useState('hidden')

  const startAnimation = (url) => {
    setTransitionStatus('enter')
    setTimeout(() => {
      router.push(url)
    }, 700)
  }
  const routerWrapper = {
    push: (url: string) => {
      startAnimation(url)
    }
  }

  useEffect(() => {
    const routeChangeEnd = (url, { shallow }) => {
      setTimeout(() => {
        setTransitionStatus('exit')
      }, 100)
    }

    router.events.on('routeChangeComplete', routeChangeEnd)

    return () => {
      router.events.off('routeChangeComplete', routeChangeEnd)
    }
  }, [])

  return (
    <TransitionContext.Provider value={{ transitionStatus, setTransitionStatus, routerWrapper } }>
      {children}
    </TransitionContext.Provider>
  )
}
