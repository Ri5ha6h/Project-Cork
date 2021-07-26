import React from 'react';
import { ButtonHTMLAttributes, FC, memo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary';
  look?: 'solid' | 'outline';
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  children,
  theme,
  look,
  className,
  disabled,
  ...rest
}) => {
  let lookClass = '';

  let themeClass = '';
  if (theme === 'primary' && look === 'solid') {
    lookClass = ' bg-blue-500 ';
    themeClass = ' border-blue-500 text-white ';
  } else if (theme === 'primary' && look === 'outline') {
    lookClass = ' bg-white ';
    themeClass = ' border-blue-500 text-blue-500 ';
  } else if (theme === 'secondary' && look === 'solid') {
    lookClass = ' bg-gray-700 ';
    themeClass = ' border-gray-700 text-white ';
  } else if (theme === 'secondary' && look === 'outline') {
    lookClass = ' bg-white ';
    themeClass = ' border-gray-700 text-gray-700 ';
  }

  return (
    <>
      <button
        {...rest}
        className={
          'px-4 py-2 focus:outline-none rounded-md border ' +
          lookClass +
          themeClass +
          className +
          (disabled ? ' bg-opacity-15 text-blue-500 ' : '  ')
        }
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  theme: 'primary',
  look: 'solid',
  // disabled: false,
};

export default memo(Button);
