import { ReactNode } from 'react';

type PrimaryButtonProps = {
  action: () => void;
  children: ReactNode;
};

const IconButton = ({ action, children }: PrimaryButtonProps) => {
  return (
    <button
      onClick={action}
      className={
        'text-(--icon-btn-primary-icon) w-10 h-10 bg-(--icon-btn-primary-bg) rounded-lg border-2 border-(--icon-btn-primary-border) flex justify-center items-center cursor-pointer transition-all hover:text-(--icon-btn-primary-icon-hover) hover:bg-(--icon-btn-primary-bg-hover)'
      }
    >
      {children}
    </button>
  );
};

export default IconButton;
