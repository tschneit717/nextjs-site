import { MouseEventHandler } from 'react'

export interface MobileNavMenuButtonProps {
  callback: MouseEventHandler<HTMLButtonElement>;
  state: boolean;
}
