import { MouseEvent, ReactNode } from 'react';
import { ButtonState } from '../../../utils/buttonConfig';
import { ButtonStyles } from '../../../types';

type PrimaryButtonProps = {
  action: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  state?: ButtonState;
};

const buttonStyles: ButtonStyles = {
  DEFAULT:
    'text-(--btn-primary-text) bg-(--btn-primary-bg) hover:bg-(--btn-primary-bg-hover) cursor-pointer',
  LOADING: 'text-(--btn-primary-text) bg-(--btn-primary-bg-hover) cursor-auto'
};

const PrimaryButton = ({
  action,
  children,
  state = ButtonState.Default
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={action}
      disabled={state === ButtonState.Loading}
      className={`${buttonStyles[state]} text-lg font-semibold px-6 min-w-36 h-12 rounded-lg flex justify-center items-center transition-all`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
