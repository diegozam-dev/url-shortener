import { MouseEvent, ReactNode } from 'react';

// Buttons
export enum ButtonState {
  Default = 'DEFAULT',
  Loading = 'LOADING'
}

type ButtonProps = {
  action: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export type PrimaryButtonProps = ButtonProps & {
  state?: ButtonState;
};

export type IconButtonProps = ButtonProps & {
  title?: string;
};

// Urls
export type UrlProps = {
  url: string;
};
