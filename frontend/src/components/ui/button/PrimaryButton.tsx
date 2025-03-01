import { ButtonState, PrimaryButtonProps } from '../../../types/index';

const buttonStyles = {
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
