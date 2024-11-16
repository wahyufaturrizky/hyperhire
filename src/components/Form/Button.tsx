import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = '',
  ...props // Spread the rest of the button props
}) => {
  return (
    <button
      className={`px-4 py-2   text-blue-500 bg-white rounded-md hover:bg-blue-200 disabled:opacity-50 ${className}`}
      onClick={onClick}
      {...props} // Apply all standard button props
    >
      {label}
    </button>
  );
};

export default Button;
