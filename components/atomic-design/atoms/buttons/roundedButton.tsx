// components/atomic-design/atoms/buttons/roundedButton.tsx
import React, { ButtonHTMLAttributes } from 'react';

type RoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
};

const RoundedButton = ({
                         children,
                         backgroundColor,
                         textColor,
                         ...props
                       }: RoundedButtonProps) => {
  return (
    <button
      className="font-serif"
      style={{ backgroundColor, color: textColor, borderRadius: '9999px' }}
      {...props}
    >
      {children}
    </button>
  );
};

export { RoundedButton };