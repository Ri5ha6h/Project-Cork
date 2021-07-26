import React from 'react';
import { FC, memo } from 'react';
import { IoMdClose } from 'react-icons/io';

interface Props {
  theme?: 'primary' | 'error' | 'success';
  look?: 'solid' | 'outline' | 'transparent';
  className?: string;
}

const Alert: FC<Props> = ({ theme, look, className, children }) => {
  let lookClass = '';
  let textColor = '';

  if (theme === 'primary' && look === 'solid') {
    lookClass = ' bg-blue-500 ';
    textColor = ' text-white ';
  } else if (theme === 'primary' && look === 'outline') {
    lookClass = ' border-blue-500 border ';
    textColor = ' text-blue-500 ';
  } else if (theme === 'primary' && look === 'transparent') {
    lookClass = ' bg-blue-500 bg-opacity-15';
    textColor = ' text-blue-500 ';
  } else if (theme === 'error' && look === 'solid') {
    lookClass = ' bg-red-500 ';
    textColor = ' text-white ';
  } else if (theme === 'error' && look === 'outline') {
    lookClass = ' border-red-500 border ';
    textColor = ' text-red-500 ';
  } else if (theme === 'error' && look === 'transparent') {
    lookClass = ' bg-red-500 bg-opacity-15 ';
    textColor = ' text-red-500 ';
  } else if (theme === 'success' && look === 'solid') {
    lookClass = ' bg-green-500 ';
    textColor = ' text-white ';
  } else if (theme === 'success' && look === 'outline') {
    lookClass = ' border-green-500 border ';
    textColor = ' text-green-500 ';
  } else if (theme === 'success' && look === 'transparent') {
    lookClass = ' bg-green-500 bg-opacity-15 ';
    textColor = ' text-green-500 ';
  }

  return (
    <div
      className={
        'relative flex items-center justify-between py-3 rounded-md px-4 w-1/2 ' +
        lookClass
      }
    >
      <span className={textColor}>
        {theme}! Lorem Ipsum is simply dummy text of the printing.
      </span>
      <IoMdClose className={textColor + ' w-5 h-5 cursor-pointer'}></IoMdClose>
    </div>
  );
};

Alert.defaultProps = {
  theme: 'primary',
  look: 'solid',
};

export default memo(Alert);
