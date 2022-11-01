import { SetStateAction } from 'react'

export interface MobileNavMenuButtonProps {
  callback: SetStateAction<boolean>;
  state: boolean;
}
