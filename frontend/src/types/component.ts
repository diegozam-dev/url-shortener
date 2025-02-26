import { MouseEvent, ReactNode } from 'react';

// Buttons
export enum ButtonState {
  Default = 'DEFAULT',
  Loading = 'LOADING'
}

export type PrimaryButtonProps = {
  action: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  state?: ButtonState;
};

// Urls
export type UrlProps = {
  url: string;
};
