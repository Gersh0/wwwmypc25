import { ButtonHTMLAttributes } from 'react';
import { ItemText } from '../texts/itemText';

type NoBackgroundButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const NoBackgroundButton = ({ children, ...props }: NoBackgroundButtonProps) => {
  return (
    <button
      className="bg-transparent border-none p-0 cursor-pointer"
      {...props}
    >
      <ItemText>{children}</ItemText>
    </button>
  );
};

export { NoBackgroundButton };