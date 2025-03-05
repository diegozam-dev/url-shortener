import { IconButtonProps } from '../../../types/component';

const IconButton = ({ action, children, title }: IconButtonProps) => {
  return (
    <button
      onClick={action}
      title={title || undefined}
      className={
        'text-(--icon-btn-primary-icon) min-w-10 h-10 bg-(--icon-btn-primary-bg) rounded-lg border border-(--icon-btn-primary-border) flex justify-center items-center cursor-pointer transition-all active:text-(--icon-btn-primary-icon-hover) active:bg-(--icon-btn-primary-bg-hover) md:hover:text-(--icon-btn-primary-icon-hover) md:hover:bg-(--icon-btn-primary-bg-hover)'
      }
    >
      {children}
    </button>
  );
};

export default IconButton;
